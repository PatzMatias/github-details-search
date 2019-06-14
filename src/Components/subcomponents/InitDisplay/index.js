import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const InitDisplay = (props) => {
  const {active} = props;
  return active ? ( 
    <div className="row h-100 d-flex justify-content-center align-items-center user-empty">
        <div className="col-6 text-center">
            <h1><FontAwesomeIcon icon={faSearch}/></h1>
            <h4>Go find someone!</h4>
        </div>
    </div>
  ) : null;
};

export default InitDisplay;