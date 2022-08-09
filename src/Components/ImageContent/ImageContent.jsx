import React from "react";
import './ImageContent.css';
import EPRODCASTIMAGE from '../Assets/Images/EPRODCASTIMAGE.png';
import {useNavigate} from "react-router-dom";

function ImageContent() {
    
  const navigate = useNavigate()
  const goToPersons=()=>{
    navigate("/EmployeeDetails")
  }
 return ( <>
    <div className="image-container">
        <div className="img-div">
            <img className="img-content" src={EPRODCASTIMAGE} alt="Bird" onClick={()=>goToPersons()} />
            
        </div>
      
    </div>
    </> );
}

export default ImageContent;