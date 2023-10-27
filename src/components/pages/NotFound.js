import React from 'react';
import './NotFound.css';
import { Link } from "react-router-dom";
import { ReactComponent as IconArrowLeft } from "../../assets/images/arrow_left.svg";
import NotFoundGif from '../../assets/images/NotFound.gif';




const NotFound = ({error}) => {

  const [errorCode, errorMessage] = error
    
  return (
    <div className='container'>
        <h1 className='titleOops'>Oops!!!!!</h1>
        <p className='textError'>Error: {errorCode} - {errorMessage}</p>
        <p className='textNotFound'>the page you requested could not be found. We are working on it</p>
        <img src={NotFoundGif} alt="" className='notFoundGif' />
      <Link to={"/"} className="linkBack" >
          <div className="inputButton buttonBackNotFound">
            <IconArrowLeft className="iconArrowLeft" />
            Back
          </div>
        </Link>
    </div>
  )
}

export default NotFound
