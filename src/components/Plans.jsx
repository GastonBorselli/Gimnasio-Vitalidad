import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { precioCoutas } from '../coutas.jsx';



export const Plans = () => {

        const settings = {
          dots: true,
          infinite: false,
          speed: 1300,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

  return (
    <div className='prices' name='home'>
        <div className="prices_container">
          <div className="programs_header">
              <span className='stroke-text'>Nuestros </span>
              <span className='white-text'>Precios.</span>
          </div>
          <div className="description_price">
                Su lugar será reservado con el pago de la cuota seleccionada.
          </div>
        </div>

        <div className='carousel'>
            <Slider {...settings}>
              {precioCoutas.map((item) => (
                 <div className='carousel_card'>
                    <div className="card-top">
                      <img src={item.linkImg} alt={item.tittle} />                      
                      <h1>{item.tittle}</h1>
                    </div>
                    <div className="card-bottom">
                      <span className='item-price'>{item.price}</span>
                    </div>
                 </div>
              ))}           
            
            </Slider>        
      </div>    
    </div>
  )
}
