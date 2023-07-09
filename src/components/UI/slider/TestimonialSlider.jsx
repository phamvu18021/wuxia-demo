import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import ava01 from '../../../assets/slide_back/backd.jpg'
import ava02 from '../../../assets/slide_back/backe.jpg'
import ava03 from '../../../assets/slide_back/backc.jpg'
import '../../../styles/slider.css'
import model from '../../../assets/slide_back/knight-removebg-preview.png'
import item from '../../../assets/slide_back/weapon-removebg-preview.png'
const TestimonialSlider = () => {

    const settings = {
        // dots: true,
        autoplay: true,
        // infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        // swipeToSlide: true,
        // slidesToShow: 1,
        // slidesToScroll: 1
        dots: false,
        prevArrow: false,
        nextArrow: false,
    }

    return (
        <Slider {...settings} className='sliderall d-flex'>

            <div className='slider__content d-flex align-item-center gap-3'>
                <p className="review__text">
                    NEW ARMOR <br /><br /><br />
                    BETTER AND HEAVIER
                </p>
                <button className='btnsl'><Link to='/products'>BUY NOW</Link></button>
                <div>
                    <img src={ava01} alt="avatar" />

                </div>
                {/* <div className="model">
                    <img src={model} alt="" />
                </div>
                <div className="item">
                    <img src={item} alt="" />
                </div> */}
            </div>
            <div className='slider__content d-flex align-item-center gap-3'>
                <p className="review__text">
                    NEW WEAPON <br /> <br /><br />
                    BETTER AND HEAVIER
                </p>
                <button className='btnsl'><Link to='/products'>BUY NOW</Link></button>
                <div>
                    <img src={ava02} alt="avatar" />

                </div>
            </div>
            <div className='slider__content d-flex align-item-center gap-3'>
                <p className="review__text">
                    BREAKING NEWS <br /> <br /><br />
                    IN THE HELL
                </p>
                <button className='btnsl2'><Link to='/news'>Read More <i class="ri-arrow-right-line"></i></Link></button>
                <div>
                    <img src={ava03} alt="avatar" />

                </div>
            </div>
        </Slider>
    )
}

export default TestimonialSlider