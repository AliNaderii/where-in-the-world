// TOOLS
import { useState } from "react";
// COMPONENTS
import Error from "./Error";
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
  const [error, setError] = useState(false);

  // const search = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.get(`https://restcountries.com/v2/name/${country}`);
  //     if (!res) {
  //       throw new Error('Could not fetch the data');
  //     }

  //     setCountry(...res.data);
  //     navigate(`/details/${country}`);
  //   }
  //   catch (err) {
  //     console.log(err);
  //     setError(true);
  //     setCountry('');
  //   }
  // };


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
        { error && <Error><p>The country you are looking for doesn't exist !!</p></Error> }
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