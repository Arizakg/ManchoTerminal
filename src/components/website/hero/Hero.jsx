import React from 'react'
import './Style.scss';
import KRGif from '../../../../public/img/large.mp4';

const Hero = () => {
  return (
    <div className="content">
      <div className="play">
        <img src="img/iPhone 14.png" className="iphone14" alt="" />
        <div className="content__tekst">
          <p className="content__Font-title">Играй.</p>
          <p className="content__Font-text">Увлекательная игра</p>
        </div>
      </div>
      <div className="change__father">
        <div className="change">
          <div className="content__tekst">
            <p className="content__Font-title">Обменивай.</p>
            <p className="content__Font-text">Получай подарки</p>
          </div>
        </div>
        <div className="content__img">
          <img src="img/blue box 1.png" className="blubox" alt="" />
        </div>
      </div>
      <div className="all">
        <img src="img/MacBook Pro 16.png" className="mac" alt="" />
        <div className="content__tekst">
          <p className="content__Font-title">Везде.</p>
          <p className="content__Font-text">На всех платформах</p>
        </div>
      </div>

      <div className="terminal">
        <img src="img/GroupTerminal.png" className="term" alt="" />
        <div className="content__tekst">
          <p className="content__Font-title">Оглянись.</p>
          <p className="content__Font-text">Терминалы везде</p>
        </div>
      </div>

      <div className="mark__terminal">
        <div className="content__img">
          <img src="img/map.png" className="blubox" alt="" />
        </div>
        <div className="mark">
          <div className="content__tekst">
            <p className="content__Font-title">Отмечай.</p>
            <p className="content__Font-text">Мы поставим терминал</p>
          </div>
        </div>
      </div>

      
      <div className="map__div">
        <video className="Kyrgysztan__video__button" src={KRGif} autoPlay muted loop />  


        <div className="map_content">
            <p className="content__map_Font-title">Изучай.</p>
            <p className="content__map_Font-text">Уникальная карта</p>  
        </div>             
      </div>
    </div>
  )
}

export default Hero