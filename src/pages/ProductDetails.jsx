import React, { useState, useEffect } from 'react'
import products from '../assets/fake-data/product'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'

import '../styles/product-details.css'
import ProductCard from '../components/UI/product-card/ProductCard'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'


const ProductDetails = () => {

  const [tab, setTab] = useState('desc');
  const [enterName,setEnteredName] =useState('')
  const [enterEmail,setEnteredEmail] =useState('')
  const [reviewMsg,setRevireMsg] =useState('')


  const { id } = useParams();

  const dispatch = useDispatch()


  const product = products.find(product => product.id === id)
  
  const { title, price, rank,category, desc,image01 } = product;

  const relatedProduct =products.filter((item)=> category === item.category);
const addItem=()=>{
  dispatch(cartActions.addItem({
    id,
    title,
    price,
    image01,
  }));
};

const submitHandler = e=>{
  e.preventDefault()
}



useEffect(()=>{
   window.scrollTo(0,0)
},[product])

  return (
    <Helmet title='Product-deltails'>
      <CommonSection title={title} />
      <Container className='mt-5'>
        <Row>

          <Col lg='6' md='6'>
            <div className="product__main-img d-flex">
              <img src={image01} alt=""  />
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="single__product-content">
              <h2 className='productdetails__title mb-3'>{title}</h2>
              <p className='product__price'>
                {' '}
                Price: <span>${price}</span></p>

              <p className='category mb-4'>Category: <span>{category}</span></p>
              <p className='rankp mb-5'>Rank : <span>{rank}</span></p>
              <button onClick={addItem} className='addTOCart__btn'>Add to Cart</button>
            </div>
          </Col>

          <Col lg='12'>
            <div className="tabs d-flex align-items-center gap-5 py-3">
              <h6 className={`${tab === "desc" ? "tab__active" : ''}`} 
              onClick={() => setTab("desc")}>Descreption</h6>
              <h6 className={`${tab === "rev" ? "tab__active" : ''}`} 
              onClick={() => setTab("rev")}>Review</h6>
            </div>

            { tab === "desc" ? 
              (<div className="tab__content">
                <p>{desc}</p>
              </div>) :

                (<div className="tab__form mb-3">
                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe </p>
                    <p className='user__email'>jhon1@gmail.com</p>
                    <p className='feedback__text'>greate product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe </p>
                    <p className='user__email'>jhon1@gmail.com</p>
                    <p className='feedback__text'>greate product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe </p>
                    <p className='user__email'>jhon1@gmail.com</p>
                    <p className='feedback__text'>greate product</p>
                  </div>

                  <form className='form' onSubmit={submitHandler}>
                    <div className='form__group'>
                      <input type="text" placeholder='Enter your name' 
                      onChange={e=> setEnteredName(e.target.value)} required/>
                    </div>

                    <div className='form__group'>
                      <input type="text" placeholder='Enter your email' 
                      onChange={e=> setEnteredEmail(e.target.value)} required/>
                    </div>

                    <div className='form__group'>
                      <textarea rows={5} type="text" placeholder='Write your review' 
                      onChange={e=> setRevireMsg(e.target.value)} required/>
                    </div>

                    <button className='addTOCart__btn' type='submit' >Submit</button>
                  </form>
                </div>)
            }
          </Col>

          <Col lg='12' className='mt-5 mb-4'>
            <h2 className='related__Product-title'>You might also like</h2>
          </Col>
          {
            relatedProduct.map((item)=>
              (<Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                <ProductCard item={item}/>
              </Col>)
            )
          }
           
        </Row>
      </Container>

    </Helmet>
  )
}

export default ProductDetails