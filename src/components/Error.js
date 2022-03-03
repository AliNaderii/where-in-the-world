// STYLES
import { StyledError } from "../styles/Error.styled";

export default function Error({ children }) {
  return (
    <StyledError>
      { children }
    </StyledError>
  );
}