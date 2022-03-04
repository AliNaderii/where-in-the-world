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

const lightTheme = {
  text: 'hsl(200, 15%, 8%)',
  background: 'hsl(0, 0%, 98%)',
  element: 'hsl(0, 0%, 100%)',
  input: 'hsl(0, 0%, 52%)',
  boxShadow:
    'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',

  font: {
    home: '14px',
    details: '16px'
  }
};

const darkTheme = {
  text: 'hsl(0, 0%, 100%)',
  background: 'hsl(207, 26%, 17%)',
  element: 'hsl(209, 23%, 22%)',
  input: 'hsl(0, 0%, 52%)',
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 1)',

  font: {
    home: '14px',
    details: '16px'
  }
};

function App() {
  const [theme, setTheme] = useState(lightTheme);

  // CHANGE LIGHT AND DARK MODE
  const changeTheme = () => {
    setTheme(prevstate => prevstate === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Router>
        <Navbar changeTheme={ changeTheme } />
        <Routes>
          <Route
            path='/'
            element={ <Home /> } />
          <Route
            path='/details/:country'
            element={ <Details /> } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
