// TOOLS
import { Link, useParams } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";
// STYLES
import { Container } from "../styles/Container";
// COMPONENTS
import Detail from "../components/Detail";
import Button from "../components/Button";
// ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Details({ mode }) {
  const name = useParams().country;
  const url = `https://restcountries.com/v2/name/${name}`;
  const data = useAxios(url);
  // MUST WAIT TILL THE PROMIS RESOLVES THEN DESTRUCTURE THE DATA
  // BECAUSE THE RESOLVED PROMIS RETURNS AN ARRAY
  let country;
  if (data) {
    [country] = data;
  }

  return (
    <Container text='16px' mode={ mode }>
      <Link to='/'>
        <Button top='25px' width='120px' mode={ mode }>
          <FontAwesomeIcon icon={ faArrowLeft } />
          Back
        </Button>
      </Link>

      { data && <Detail country={ country } mode={ mode }>Detail</Detail> }
    </Container>
  );
}