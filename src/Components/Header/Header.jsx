import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import AddEmployee from "../AddEmployee/AddEmployee";
import "./Header.css";
import Settings from "../Settings/Settings";
import { useLocation } from "react-router-dom";

function Header(props) {
  const [isPerson, setIsPerson] = useState(false);
  const [persons, setPersons] = useState([]);
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname, location);
    if (location.pathname === "/EmployeeDetails") {
      setIsPerson(true);
    } else {
      setIsPerson(false);
    }
  }, [location]);

  let getDetails = (value) => {
    let p = [...persons];
    p.push(value);
    setPersons(p);
    console.log('header',p)
    props.handlePerson(p);
  };
  return (
    <>
      <div className="header-container">
        <div className="list-menu" style={{marginLeft:"20px"}} >
          <Menu />
        </div>
       <div>
        <h4>Welcome To EprodCast Software Pvt Ltd</h4>
       </div>

        {isPerson ? (
          <div className="list-menu" style={{marginRight:"20px"}}>
            <AddEmployee sendDetails={getDetails} />
          </div>
        ) : (
          <div className="list-menu" style={{marginRight:"20px"}} >
            <Settings />
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
