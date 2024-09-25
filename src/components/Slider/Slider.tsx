import  { useState } from 'react';
import { Carousel } from 'antd';
import './Slider.css';

import fonvideo from '../../assets/forfree.mp4'
import choreo1 from '../../assets/choreo2.png'
import friend from '../../assets/frind.png'
import gif from '../../assets/gift.gif'

export default function Slider() {
    const [isImageClicked, setIsImageClicked] = useState(false);

    const handleImageClick = () => {
      setIsImageClicked(true);
    };

  return (
    <div className='container_carousel'>
      <div className='carousel'>
        <Carousel autoplay autoplaySpeed={5000}>
          <div className='slide'>
            <video className='back-video2' autoPlay loop muted>
              <source src= {fonvideo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <div className='fon1'></div>
            <h3 className='text1'>Приходи на бесплатное пробное занятие!</h3>
            <img className='photo3' src={choreo1} alt="танцовщица" />
            {/* <button className='zapis'>Записаться</button> */}
          </div>
          <div className='slide fon3'>
            <img className='photo2' src={friend} alt="Красивая картинка" />
            <h3 className='text2'>Приведи друга</h3>
            {!isImageClicked ? (
              <img 
                className='gif' 
                src={gif}
                alt="Подарок!" 
                onClick={handleImageClick} 
              />
            ) : (
              // <div className='conteiner_txt'>
                <div className='gif_txt'>
                <div className='fon2'></div>
                <p className='text-overlay'> бесплатная индивидуальная тренировка в подарок</p>
              </div>
            )}
          </div>
        </Carousel>
      </div>
    </div>
  );
}
