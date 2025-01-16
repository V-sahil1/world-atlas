import React, { startTransition, useEffect, useState } from "react";
import { useTransition } from "react";
import { getCountryData } from "../Api/PostApi";
import Loader from "../Components/Ui/Loader";
import CountryCard from "../Components/Layout/CountryCard";
import SearchFilter from "../Components/Ui/SearchFilter";

function Country() {
  const [countries, setCountries] = useState([]);
  const [ispanding, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);
  if (ispanding) return <Loader />;

  console.log(search, filter);
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
const filterRegion =(country) =>{
  if(filter === 'all' ) return country
  return country.region === filter
}
  
  const filterCountries = countries.filter((country) =>
    searchCountry(country) && filterRegion(country)
  );
  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setsearch={setSearch}
        filter={filter}
        setfilter={setFilter}
        countries ={countries}
        setcountries ={setCountries }
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curcountry, index) => {
          return <CountryCard country={curcountry} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Country;
