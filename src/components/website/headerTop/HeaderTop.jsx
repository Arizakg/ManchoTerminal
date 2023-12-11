import React from 'react'
import './Style.scss';

const HeaderTop = () => {
  return (
    <div className="header_div">     
      <div className="header__top">
          <a href="#" className="logo">
            <img className="logo__img" src="img/logo.svg" alt="" />
          </a>
          <div className='Lang_icons'>
            <a href="#">
              <img className="logo__en" src="img/englishLanguage.svg" alt="" />
            </a>
            <a href="#">
              <img className="logo__kg" src="img/kyrgyzLanguage.svg" alt="" />
            </a>
            <a href="#">
              <img className="logo__ru" src="img/russianLanguage.svg" alt="" />
            </a>
          </div>
       </div> 
     </div>      
  )
}

export default HeaderTop