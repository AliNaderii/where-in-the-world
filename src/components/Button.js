// STYLES
import { StyledButton } from "../styles/Button.styled";

export default function Button({ children, width, padding, mode }) {
  return (
    <StyledButton width={ width } padding={ padding }>
      { children }
    </StyledButton>
  );
}