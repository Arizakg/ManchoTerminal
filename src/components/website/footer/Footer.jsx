import React from 'react'
import './Style.scss';
import logo from "../../../assets/images/logo.svg";
import social from "../../../assets/images/Social icon.svg";
import twitter from "../../../assets/images/twitter.svg";
import insta from "../../../assets/images/insta.svg";
import inSocial from "../../../assets/images/in.svg";
import uTube from "../../../assets/images/uTube.svg";
import telega from "../../../assets/images/telega.svg";

const Footer = () => {
  return (
    <div className="footer__container">    
        <div className="footer">        
            <div className="footer__info">
                <div className="footer__logo">
                    <img src={logo} alt="" />
                    <div>
                        Finik
                    </div>     
                </div>                 
                <div>
                    Удобное и надежное отечественное приложение для оплаты в Кыргызстане
                </div>
                <div className="footer__tekst">
                    ©2022 Averspay <br></br>Лицензия НБКР № 3006010615, № 2006010615 от 06.02.2015
                </div>
            </div>

            <div>
                <ul className="footer__product">
                    <li>
                        Продукты                   
                    </li>
                    <li>
                        Кошелек
                    </li>
                    <li>
                        Терминалы
                    </li>
                    <li>
                        Эквайринг
                    </li>
                </ul>            
            </div> 

            <div>
                <ul className="footer__product">
                    <li>
                        О нас
                    </li>
                    <li>
                        Компания
                    </li>
                    <li>
                        Документы
                    </li>               
                </ul>            
            </div>

            <div>            
                <ul className="footer__social">
                    <li>
                        <img src={social} alt="" />
                    </li>

                    <li>
                        <img src={twitter} alt="" />
                    </li>
                    
                    <li>
                        <img src={insta} alt="" />
                    </li>

                    <li>
                        <img src={inSocial} alt="" />
                    </li>
                        
                    <li>
                        <img src={uTube} alt="" />
                    </li>   
                    
                    <li>
                        <img src={telega} alt="" />
                    </li>                             
                </ul>            
            </div>    

        </div>
    </div>
    
  )
}

export default Footer