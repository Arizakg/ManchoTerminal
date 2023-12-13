import React from 'react';
import TitleLogo from "../../../assets/images/Vector.svg";
import WebApp from "../../../assets/images/ddd.svg";
import GoogleAp from "../../../assets/images/GroupGoogle.svg"
import AppleAp from "../../../assets/images/GroupApple.svg";
import SmartHand from "../../../assets/images/iPhone 12 Pro (Wooden Hands).png";
import KRGif from '../../../assets/images/large.mp4';

import './Style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className='Kyrgyzstan__container'>       
          <video className="Kyrgysztan__video" src={KRGif} autoPlay muted loop></video>            
          <div className="header__content">
            <div className="title">              
               <img className="title__logo" src={TitleLogo}/>              
               <div className="title__content">Карта</div>
            </div>
            <div className="text__content">
              Карта терминалов от Finik, исследуйте, <br /> отмечайте и зарабатывайте
              баллы
            </div>

            <ul className="list">

              <li className="list__button">
                <button className="button">
                  <a href="#" className="list__link">
                        <div className="header__bg">
                            <div className="header__webApp">
                                <img src={WebApp} alt="" />
                            </div>
                            <div>
                              <div className="goTo">Go to the</div>
                              <div className="Web">Web App</div>                               
                            </div>
                        </div>                    
                    </a>        
                </button>
              </li>
              
              <li className="list__button">
                <a href="#" className="list__link">
                  <img src={GoogleAp} alt="" className="list__img" />
                </a>
              </li>
              <li className="list__button">
                <a href="#" className="list__link">
                  <img src={AppleAp} alt="" className="list__img" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="body__header"> 
            <div className="body__content">

              <div>
                <div className="title__content">Исследуйте           </div>
                  <div>
                      Карта терминалов от Finik, исследуйте, отмечайте и зарабатывайте
                      баллы.
                </div>
              </div>                 
              <div>
                <div className="title__content">Отмечайте           </div>
                  <div>
                      Карта терминалов от Finik, исследуйте, отмечайте и зарабатывайте
                      баллы.
                </div>
              </div>              
              <div>
                <div className="title__content">Зарабатывай баллы</div>
                  <div>
                      Карта терминалов от Finik, исследуйте, отмечайте и зарабатывайте
                      баллы.
                </div>
              </div>
            </div>
            
            <div>
              <img className="smartHand" src={SmartHand} alt=""/>
            </div> 

          </div>
        </div>

      </div>
    </header>
  )
}

export default Header