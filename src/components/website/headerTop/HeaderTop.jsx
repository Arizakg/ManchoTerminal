import React from 'react'
import Logo_img from "../../../assets/images/logo.svg";
import logo__en from "../../../assets/images/englishLanguage.svg";
import logo__kg from "../../../assets/images/kyrgyzLanguage.svg";
import logo__ru from "../../../assets/images/russianLanguage.svg";
import './Style.scss';

const HeaderTop = () => {
  return (
    <div className="header_div">     
      <div className="header__top">
          <a href="#" className="logo">
            <img className="logo__img" src={Logo_img} alt="" />
          </a>
          <div className='Lang_icons'>
            <a href="#">
              <img className="logo__en" src={logo__en} alt="" />
            </a>
            <a href="#">
              <img className="logo__kg" src={logo__kg} alt="" />
            </a>
            <a href="#">
              <img className="logo__ru" src={logo__ru} alt="" />
            </a>
          </div>
       </div> 
     </div>      
  )
}

export default HeaderTop