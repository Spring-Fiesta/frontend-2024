import React from 'react'
import Joker from './joker.svg'

const ErrorPage = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",color:"white",flexDirection:"column"}}>
        <img src={Joker} alt="Joker" width="50%" height="50%" />     
        <h1>Error 404 Page Not Found</h1>
    </div>
  )
}

export default ErrorPage
