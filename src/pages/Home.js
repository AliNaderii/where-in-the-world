// TOOLS
import React, { useState } from "react";
import { Suspense } from "react";
import { useAxios } from "../hooks/useAxios";
// STYLES
import { Container } from "../styles/Container";
// COMPONENTS
import Form from "../components/Form";
const Cards = React.lazy(() => import('../components/Cards'));

export default function Home({ mode }) {
  const url = 'https://restcountries.com/v2/all';
  const [filter, setFilter] = useState(null);

  const countries = useAxios(url, filter);

  // FILTER COUNTRIES
  const addFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <Container mode={ mode }>
      <Form countries={ countries } addFilter={ addFilter } mode={ mode } />

      <Suspense fallback={ <p>Loading ...</p> }>
        { countries && <Cards countries={ countries } mode={ mode } /> }
      </Suspense>
    </Container>
  );
}