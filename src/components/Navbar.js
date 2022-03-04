// STYLES
import { StyledNavbar } from "../styles/Navbar.styled";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function Navbar({ changeTheme }) {
  return (
    <StyledNavbar>
      <h1>Where in the world?</h1>
      <button onClick={ changeTheme }>
        <FontAwesomeIcon icon={ faMoon } />
        Dark Mode
      </button>
    </StyledNavbar>
  );
}