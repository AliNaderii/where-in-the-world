// TOOLS
import { Link } from "react-router-dom";

// STYLES
import { StyledCards, Card, Flag, Info } from "../styles/Cards.styled";

export default function Cards({ countries, mode }) {

  return (
    <StyledCards>
      { countries && countries.map(country => (
        <Card key={ country.name } mode={ mode }>
          <Link to={ `/details/${country.name}` }>
            <Flag src={ country.flags.png } alt='flag' />
          </Link>
          <Info>
            <h3>{ country.name }</h3>
            <p>Population: <span>{ country.population }</span></p>
            <p>Region: <span>{ country.region }</span></p>
            <p>Capital: <span>{ country.capital }</span></p>
          </Info>
        </Card>
      ))
      }

    </StyledCards >
  );
}