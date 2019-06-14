import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


const ErrorDisplay = (props) => {
  const {error, message} = props;
  return error ? ( 
    <div className="row h-100 d-flex justify-content-center align-items-center error-box">
      <div className="col-6 text-center">
        <h1><FontAwesomeIcon icon={faTimesCircle}/></h1>
        <h4>{message}</h4>
      </div>
    </div>
  ) : null;
};

export default ErrorDisplay;