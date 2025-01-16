import React from "react";

function SearchFilter({ search, setsearch, filter, setfilter ,countries,setcountries}) {
  const hanldInputChange = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };
  const handleSelectionChange = (e) => {
    e.preventDefault();
    setfilter(e.target.value);
  };
  const sortCountries = (value) =>
  {
    const sortCountry =[...countries].sort((a,b )=>{
      return  value === 'asc' 
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common)
      

    })
    setcountries(sortCountry)
  }
  return (
    <>
      <section className="section-searchFilter container">
        <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={hanldInputChange}
        />
        </div>
        <div>
          <button onClick={( ) => sortCountries('asc')}>Asc</button>
        </div>
        <div>
          <button onClick={( ) => sortCountries('des')}>Desc</button>
        </div>
        
        
        <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectionChange }
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default SearchFilter;
