// STYLES
import { StyledForm, Searchbar } from "../styles/Form.styled";
// ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// REACT-DROPDOWN
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
];

export default function Form({ handleSearch, search, addFilter, mode }) {

  return (
    <StyledForm mode={ mode }>
      <div>
        <Searchbar mode={ mode }>
          <FontAwesomeIcon icon={ faSearch } />
          <input
            type='text'
            placeholder="Search for a country..."
            onChange={ (e) => handleSearch(e.target.value) }
            value={ search }
          />
        </Searchbar>
      </div>
      <Dropdown
        options={ options }
        placeholder='Filter by Region'
        onChange={ (e) => addFilter(e.value) }
        mode={ mode }
      />
    </StyledForm>
  );
}