import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function DropdownOp(){


  
    return(
        <div className="container mt-5">
      <div className="dropdown">
        <button
          className="btn btn-secondary bg-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Student-Name
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">John</a></li>
          <li><a className="dropdown-item" href="#">Smith</a></li>
          <li><a className="dropdown-item" href="#">Johnson</a></li>
        </ul>
      </div>
    </div>
    )
}
export default DropdownOp;