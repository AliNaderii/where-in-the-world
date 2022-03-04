// TOOLS
import { Link } from "react-router-dom";
// COMPONENTS
import NotFound from "./NotFound";
// STYLES
import { StyledCards, Card, Flag, Info } from "../styles/Cards.styled";

export default function Cards({ countries, isPending }) {

  return (
    <>
      { countries.length === 0 ?
        <NotFound /> :

        < StyledCards >
          {
            countries.length > 0 && countries.map(country => (
              <Card key={ country.name } >
                <Link to={ `/details/${country.name.replace(/' '/g, '%20')}` }>
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
      }
    </>
  );
};;