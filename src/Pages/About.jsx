import React from 'react'
import CountryData from "../Api/CountryData.json";



function About() {
  return (
   <>
   <section className='section-about container'>
   <h2 className='container-title'>
   Here are the Interesting Facts <br />we're proud of</h2>
   
   <div className='gradient-cards'>
   {
          CountryData.map((value)=>{
            const {id,countryName,capital,population,interestingFact} = value
            return(
              <div className='card' key={id} > 
      <div className='container-card bg-blue-box'>
     
        <p className='card-title' key={countryName}>{value.countryName}</p>
        <p>
          <span className='card-description' key={capital}>{value.capital}</span>
        </p>
        <p>
          <span className='card-description' key={population}>{value.population}</span>
        </p>
        <p>
          <span className='card-description' key={interestingFact}>{value.interestingFact}</span>
        </p>

      </div>
      
      
    </div>

            )
           

          })
        }
    
   </div>
   </section>
   </>
  )
}

export default About