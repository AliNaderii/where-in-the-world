// STYLES
import { StyledNavbar } from "../styles/Navbar.styled";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function Navbar({ changeMode, mode }) {
  return (
    <StyledNavbar mode={ mode }>
      <h1>Where in the world?</h1>
      <button onClick={ changeMode }>
        <FontAwesomeIcon icon={ faMoon } />
        Dark Mode
      </button>
    </StyledNavbar>
  );
}