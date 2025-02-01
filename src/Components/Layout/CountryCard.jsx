import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function CountryCard({country}) {
    const {flags,name,population,region ,capital}= country
  return (
    <li className='country-card card element'>
        <div className='container-card bg-white-box  '>
            <img src={flags.svg} alt={flags.alt} />
            <div className='country-info'>
                <p className='card-title'>{name.common}</p>
                <p>
                    <span className='card-description'>Population:</span>
                    {population.toLocaleString()}
                </p>
                <p>
                    <span className='card-description'>Region:</span>{region}
                </p>
                <p>
                    <span className='card-description'>Capital:</span>{capital[0]}
                </p>
               <NavLink to= {`/country/${name.common}`}  >
                        <button className='btn btn-darken btn-inline bg-white-box'>
                          Read More <FaLongArrowAltRight/>
                        </button>  </NavLink>


            </div>
        </div>
    </li>

   
  )
}

export default CountryCard