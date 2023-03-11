import React from 'react'
import '../../../styles/product-card1.scss'
import '../../../styles/product-card.css'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

import greycard1 from '../../../assets/images/grey-card1.png'
import greycard2 from '../../../assets/images/grey-card2.png'
import greencard1 from '../../../assets/images/green-card1.png'
import greencard2 from '../../../assets/images/green-card2.png'
import bluecard1 from '../../../assets/images/blue-card1.png'
import bluecard2 from '../../../assets/images/blue-card2.png'
import purecard1 from '../../../assets/images/pure-card1.png'
import purecard2 from '../../../assets/images/pure-card2.png'
import goldcard1 from '../../../assets/images/gold-card1.png'
import goldcard2 from '../../../assets/images/gold-card2.png'
import redcard1 from '../../../assets/images/red-card1.png'
import redcard2 from '../../../assets/images/red-card2.png'


const rankbg=[
    {
        name:"Normal",
        imgbg: greycard1,
        imghv: greycard2,
        color: "#fff",
    },
    {
        name:"Rare",
        imgbg: greencard1,
        imghv: greencard2,
        color:"#4AED08",
    },
    {
        name:"Srare",
        imgbg: bluecard1,
        imghv: bluecard2,
        color:"#64C5FA"
    },
    {
        name:"Epic",
        imgbg: purecard1,
        imghv: purecard2,
        color:"#F06EB2"
    },
    {
        name:"Lengendary",
        imgbg: goldcard1,
        imghv: goldcard2,
        color:"#FFF83D",
    },
    {
        name:"Unique",
        imgbg: redcard1,
        imghv: redcard2,
        color:"#FF0004",     
    },
]


const ProductCard = (props) => {

    const { id, title, image01, price,rank } = props.item;
    const dispatch = useDispatch()

    const addToCart = () =>{
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }

    const backg = rankbg.find((item) => item.name === props.item.rank)
 

    return (
        <div className='product__item'  style={{ '--my-image': `url('${backg.imgbg}')`, '--hover-image':  `url(${backg.imghv})`,'--border-image':  `${backg.color}` }}>
            <div className='product__img'>
            <Link to={`/products/${id}`}>
                <img className='product_image' src={image01} alt="product-img" />
            </Link>
                
            </div>
            <div className="product__content">
                <p className='product__title'><Link to={`/products/${id}`}>{title}</Link></p>
                <div className='d-flex align-item-center justify-content-between'>
   
                    <button className='addToCart__btn' onClick={addToCart}>${price}.00</button>
                </div>
            </div>
            <button className='btndot1'>  </button>
            <button className='btndot2'>  </button>
            <button className='btndot3'>  </button>
            <button className='btndot4'>  </button>
        </div>

    );
};

export default ProductCard;