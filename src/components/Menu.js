import React from "react";
import {withRouter } from "react-router-dom";
const Menu = ({history}) => {

  // console.log({history})

  const btnMenu = history?.location?.pathname==='/tomate' ? 'btn-close' : 'btn-menu';

  const toggleClass = () => {
    if(btnMenu ==="btn-menu"){
      history.push('/tomate')
    } else {
      history.push('/')
    }
  };


return (
<div className="leftContainer">
      <div className="logo"></div>
      <div className="panier"></div>
      <div className="hyphen-ver"></div>
      <div className= {btnMenu} onClick={toggleClass}></div>
      <div className="hyphen-ver"></div>
      <div className="search"></div>
      <div className="orgabit">
      <span style={{color: "#FBD848"}}>ORGA</span><span style={{color: "#39553A"}}>BITS</span></div>
  </div>
   
  );
};

export default withRouter(Menu);