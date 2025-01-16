import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'


function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    
  return (
    <>
    <h1>Oops! An  error occurred.</h1>
    {error && <p>{error.data}</p>}
    <NavLink to= "/"  >
    <button>GO Home</button></NavLink>
    </>
  )
}

export default ErrorPage