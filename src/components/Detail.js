// TOOLS
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
// STYLES
import { StyledDetail, InfoSection, CountryInfo, BorderCountries } from "../styles/Detail.styled";
import Button from "../components/Button";

export default function Detail({ country }) {
  const [borders, setBorders] = useState([]);

  // THE BORDER COUNTRIES OF A COUNTRY IS AN ARRAY WHICH IS WRITTEN 
  // IN alphaCode.
  // TO GET THE FULL NAME OF THAT alphaCode, WE MAKE A CALL TO THE API
  // FOR EACH BORDER COUNTRY AND THEN USE IT'S FULLNAME
  const getBorder = async (border) => {
    try {
      const res = await axios.get(`https://restcountries.com/v2/alpha/${border}`);
      if (!res) {
        throw new Error('Something went wrong');
      }

      setBorders(prevstate => [...prevstate, res.data.name]);
    }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (country && country.borders) {
      setBorders([]);
      country.borders.map(border => getBorder(border)
      );
    }

  }, [country]);

  return (
    <StyledDetail>
      <div>
        <img src={ country.flags.svg } alt='flag' />
      </div>

      <InfoSection>
        <h2>{ country.name }</h2>
        <CountryInfo>
          <div>
            <p>Nativ Name: <span>{ country.nativeName }</span></p>
            <p>Population: <span>{ country.population }</span></p>
            <p>Region: <span>{ country.region }</span></p>
            <p>Sub Region: <span>{ country.subregion }</span></p>
            <p>Capital:
              <span>
                { country.capital ? country.capital : ' No Capital' }
              </span>
            </p>
          </div>
          <div>
            <p>Top Level Domain: <span>{ country.topLevelDomain[0] }</span></p>
            <p>Currencies:
              <span>
                { country.currencies ? country.currencies[0].name : ' No Currencies' }
              </span>
            </p>
            <p>Languages: { country.languages.map(lang => (
              <span key={ lang.name }>{ lang.name }, </span>
            )) }</p>
          </div>
        </CountryInfo>

        <BorderCountries >
          <p>BorderCountires: </p>
          <div>
            { borders.map(border => (
              <Link to={ `/details/${border}` } key={ border }>
                <Button
                  width='100%'
                  padding='5px'
                >
                  { border }
                </Button>
              </Link>
            )) }
          </div>
        </BorderCountries>
      </InfoSection>

    </StyledDetail>
  );
}