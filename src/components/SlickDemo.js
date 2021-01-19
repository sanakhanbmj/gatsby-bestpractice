import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './slickdemo.css';  
export class SlickDemo extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 100, 
          slidesToShow: 1,  
          slidesToScroll: 1,
          autoplaySpeed: 1000,
          
          };  
          return (  
            <div>  
             
            <Slider {...settings} >  
             
              <div className="wdt1">  
              </div>
              <div className="wdt2">  
                
              </div>  
              <div className="wdt3">  
              
              </div >  
              <div className="wdt4">  
              
              </div>  
             
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default SlickDemo  