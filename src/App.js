// TOOLS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// STYLED COMPONENTS THEME PROVIDER && GLOBAL STYLES
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global";
// PAGES && COMPONENTS
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

const theme = {
  light: {
    text: 'hsl(200, 15%, 8%)',
    background: 'hsl(0, 0%, 98%)',
    element: 'hsl(0, 0%, 100%)'
  },
  dark: {
    text: 'hsl(0, 0%, 100%)',
    background: 'hsl(207, 26%, 17%)',
    element: 'hsl(209, 23%, 22%)'
  },
  input: 'hsl(0, 0%, 52%)',

  font: {
    home: '14px',
    details: '16px'
  }
};

function App() {
  const [mode, setMode] = useState('light');
  console.log('app:', mode);

  // CHANGE LIGHT AND DARK MODE
  const changeMode = () => {
    setMode(prevstate => prevstate === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle mode={ mode } />
      <Router>
        <Navbar changeMode={ changeMode } mode={ mode } />
        <Routes>
          <Route
            path='/'
            element={ <Home mode={ mode } /> } />
          <Route
            path='/details/:country'
            element={ <Details mode={ mode } /> } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
