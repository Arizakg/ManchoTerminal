import React from 'react'
import './Style.scss';

const Footer = () => {
  return (
    <div className="footer__container">    
        <div className="footer">        
            <div className="footer__info">
                <div className="footer__logo">
                    <img src="img/logo.svg" alt="" />
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
                        <img src="img/Social icon.svg" alt="" />
                    </li>
                    <li>
                        <img src="img/twitter.svg" alt="" />
                    </li>
                    <li>
                        <img src="img/insta.svg" alt="" />
                    </li>
                    <li>
                        <img src="img/in.svg" alt="" />
                    </li>
                    <li>
                        <img src="img/uTube.svg" alt="" />
                    </li>
                    <li>
                        <img src="img/telega.svg" alt="" />
                    </li>                             
                </ul>            
            </div>    

        </div>
    </div>
    
  )
}

export default Footer