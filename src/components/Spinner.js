// REACT-SPINNER COMPONENT
import MoonLoader from 'react-spinners/MoonLoader';
// STYLES
import { StyledSpinner } from '../styles/Spinner.styled';

export default function Spinner({ isPending }) {
  const css = `
    fill: red;
    color: red;
  `;

  return (
    <StyledSpinner>
      <MoonLoader loading={ isPending } color={ 'navy' } size={ 100 }
        css={ css } />
    </StyledSpinner>
  );
}