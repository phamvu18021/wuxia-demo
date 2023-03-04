import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import ava01 from '../../../assets/images/wall.jpg'
import ava02 from '../../../assets/images/wall1.jpg'
import ava03 from '../../../assets/images/wall2.jpg'
import '../../../styles/slider.css'
const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
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