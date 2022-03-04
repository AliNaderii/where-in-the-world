// TOOLS
import React, { useState } from "react";
import { useAxios } from "../hooks/useAxios";
// STYLES
import { Container } from "../styles/Container";
// COMPONENTS
import Form from "../components/Form";
import Spinner from "../components/Spinner";
import Cards from '../components/Cards';

export default function Home() {
  const url = 'https://restcountries.com/v2/all';
  const [searchTerm, setSearchTerm] = useState(null);
  const [filter, setFilter] = useState(null);

  // GET COUNTRIES
  const { data, isPending } = useAxios(url, filter);
  console.log(data);

  // SET SEARCHED COUNTRY
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // FIND THE SEARCHED COUNTRY
  const countries = data ? data.filter(country => {
    const countryName = country.name.toLowerCase();
    const input = searchTerm ? searchTerm.toLowerCase() : '';
    return countryName.includes(input);
  }) : [];
  console.log(countries);

  // SET FILTER FOR FILTERING COUNTRIES BY REGION
  const addFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <Container>
      <Form addFilter={ addFilter } handleSearch={ handleSearch } />
      { !isPending && <Cards countries={ countries } /> }
      { isPending && <Spinner /> }
    </Container>
  );
}