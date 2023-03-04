import React from 'react';
import { useEffect, useState } from 'react'

import Helmet from '../components/Helmet/Helmet.js'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

import '../styles/hero-section.css'
import { Link } from 'react-router-dom'
import Category from '../components/UI/category/Category.jsx'

import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

import products from '../assets/fake-data/product.js'
import productCategoryImg01 from '../assets/images/category-01.png'
import productCategoryImg02 from '../assets/images/category-02.png'
import productCategoryImg03 from '../assets/images/category-03.png'
import productCategoryImg04 from '../assets/images/category-04.png'
import ProductCard from '../components/UI/product-card/ProductCard.jsx'
import '../styles/home.css'
import whyImg from '../assets/images/two-sword.png'

import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';
import news from '../assets/fake-data/news'
import NewsCard2 from '../components/UI/news-card/NewsCard2.jsx';

const featureData = [
  {
    title: 'High Quality',
    imgurl: featureImg01,
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit "
  },
  {
    title: '100% Guarantee',
    imgurl: featureImg02,
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit "
  },
  {
    title: 'Shipping Safety ',
    imgurl: featureImg03,
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit "
  },
]

const categorypp = [
  {
    tag: "WEAPON",
    cate: [{ name: "SWORD" }, { name: "AXE" }, { name: "HAMMER" }, { name: "LANCE" }, { name: "BOW" }],
  },
  {
    tag: "ARMOR",
    cate: [{ name: "ARMOR" }, { name: "SHIELD" }, { name: "RING" }, { name: "FULLARMOR" }],
  },
  {
    tag: "POTION",
    cate: [{ name: "HEALT POTION" }, { name: "MAGIC POTION" }],
  },
  {
    tag: "BOOK SKILL",
    cate: [{ name: "MAGIC BOOK" }, { name: "MARTIAL ARTS BOOK" }],
  },
]

const catetocate = [
  {
    cateup: 'SWORD',
    catedown: 'Sword',
  },
  {
    cateup: 'AXE',
    catedown: 'Axe',
  },
  {
    cateup: 'HAMMER',
    catedown: 'Hammer',
  },
  {
    cateup: 'LANCE',
    catedown: 'Lance',
  },
  {
    cateup: 'BOW',
    catedown: 'Bow',
  },
  {
    cateup: 'ARMOR',
    catedown: 'Armor',
  },
  {
    cateup: 'SHIELD',
    catedown: 'Shield',
  },
  {
    cateup: 'RING',
    catedown: 'Ring',
  },
  {
    cateup: 'FULLARMOR',
    catedown: 'Fullarmor',
  },
  {
    cateup: 'HEALT POTION',
    catedown: 'Healt Potion',
  },
  {
    cateup: 'MAGIC POTION',
    catedown: 'Magic Potion',
  },
  {
    cateup: 'MAGIC BOOK',
    catedown: 'Magic Book',
  },
  {
    cateup: 'MARTIAL ARTS BOOK',
    catedown: 'Martial Arts Book',
  },
]
const Home = () => {

  const [category, setCategory] = useState('WEAPON');
  const [allProducts, setALLProducts] = useState(products);
  const [category2, setCategory2] = useState('SWORD');

  const [categorypr, setCategorypr] = useState('WEAPON');
  const [allProductspr, setALLProductspr] = useState(products);
  const [categorypr2, setCategorypr2] = useState('SWORD');

  /*============popular=========*/
  useEffect(() => {

    let btn2list = []
    btn2list = categorypp.find((item) => item.tag === category);
    setCategory2(btn2list.cate[0].name)
  }, [category])

  useEffect(() => {

    let btnx = catetocate.find((item) => item.cateup === category2)
    const filteredProducts = products.filter(item => item.category ===
      btnx.catedown && (item.rank === "Normal" || item.rank === "Rare" || item.rank === "Srare" || item.rank === 'Epic'))
      .slice(0, 5);
    setALLProducts(filteredProducts)

  }, [category2])

  let btn2list = []
  btn2list = categorypp.find((item) => item.tag === category);


  /*============legendary=========*/
  useEffect(() => {

    let btnpr2list = []
    btnpr2list = categorypp.find((item) => item.tag === categorypr);
    setCategorypr2(btnpr2list.cate[0].name)
  }, [categorypr])

  useEffect(() => {

    let btnx = catetocate.find((item) => item.cateup === categorypr2)
    const filteredProductspr = products.filter(item => item.category ===
      btnx.catedown && (item.rank === "Lengendary" || item.rank === "Unique"))
      .slice(0, 5);
    setALLProductspr(filteredProductspr)

  }, [categorypr2])

  let btnpr2list = []
  btnpr2list = categorypp.find((item) => item.tag === categorypr);





  return (

    <Helmet title="Home">

      <div className='home__container'>

        <div className='v-shop'>
          <section >
            <Row>
              <Col lg='12' md='12'>
                <div className='testimonial '>
                  <TestimonialSlider />
                </div>
              </Col>
            </Row>
          </section>
        </div>

        <div className='v-shop1'>


          <section className='news_home pt-5'>
            <Container className='pt-4'>
              <Row>
                <Col lg='12' md='12' sm='12' className='news_ss_head'>
                  <p className='news_ss_title'>NEWS</p>
                  <p className='btn_goto_news'>
                    <Link to='/news'>
                      Go to News <i class="ri-arrow-right-line"></i>
                    </Link>

                  </p>
                </Col>
              </Row>
              <Row>
                {
                  news.slice(0, 3).map((item) => (
                    <Col lg='4' md='6' sm='12' className='d-flex '>
                      <NewsCard2 item={item} />
                    </Col>
                  ))
                }
              </Row>
            </Container>
          </section>

          <section className='pt-5'>
            <Container children='d-flex'>
              <div >
                <p className='category__ss_title d-flex'>What we have ?</p>
              </div>
            </Container>

            <Category />

            <Container children='d-flex'>
              <div >
                <p className='category__ss_bot d-flex'>CHOSE YOUR WEAPON</p>
              </div>
            </Container>
          </section>
        </div>





        <div className='v-shop2'>
          <section>
            <Container>
              <Row>

                <Col lg='12'>
                  <p className='pop_title'>POPULAR PRODUCT</p>
                  <div className="product__category d-flex gap-4 pt-5">

                    <button className={`d-flex align-item-center gap-2 ${category === 'WEAPON' ? 'tagBtnActive' : ''}`}
                      onClick={() => setCategory('WEAPON')}>
                      <img src={productCategoryImg01} alt="" />Weapon
                    </button>

                    <button className={`d-flex align-item-center gap-2 ${category === 'ARMOR' ? 'tagBtnActive' : ''}`}
                      onClick={() => setCategory('ARMOR')}>
                      <img src={productCategoryImg02} alt="" />Armor
                    </button>

                    <button className={`d-flex align-item-center gap-2 ${category === 'POTION' ? 'tagBtnActive' : ''} `}
                      onClick={() => setCategory('POTION')}>
                      <img src={productCategoryImg03} alt="" />Potion
                    </button>
                    <button className={`d-flex align-item-center gap-2 ${category === 'BOOK SKILL' ? 'tagBtnActive' : ''} `}
                      onClick={() => setCategory('BOOK SKILL')}>
                      <img src={productCategoryImg03} alt="" />Book Skill
                    </button>

                  </div>
                </Col>

                <div className="product__category2 d-flex gap-4">

                  {
                    btn2list.cate.map((item, index) => (
                      <button className={`d-flex align-item-center gap-2 ${category2 === item.name ? 'tagBtnActive' : ''} `}
                        onClick={() => setCategory2(item.name)} key={index}>
                        {item.name}
                      </button>
                    ))
                  }

                </div>


                {
                  allProducts.map((item) => (
                    <Col md='4' sm='6' xs='6' key={item.id} className='colwidth align-content-center mt-5'>
                      <ProductCard item={item} />
                    </Col>
                  ))
                }

              </Row>
            </Container>
          </section>

        </div>

        <div className='v-shop3'>
          <section>
            <Container>
              <Row>

                <Col lg='12'>
                  <p className='pop_title2'>LENGENDARY PRODUCT </p>
                  <div className="product__category d-flex gap-4 pt-5">

                    <button className={`d-flex align-item-center gap-2 ${categorypr === 'WEAPON' ? 'tagBtnActive' : ''}`}
                      onClick={() => setCategorypr('WEAPON')}>
                      <img src={productCategoryImg01} alt="" />Weapon
                    </button>

                    <button className={`d-flex align-item-center gap-2 ${categorypr === 'ARMOR' ? 'tagBtnActive' : ''}`}
                      onClick={() => setCategorypr('ARMOR')}>
                      <img src={productCategoryImg02} alt="" />Armor
                    </button>

                    <button className={`d-flex align-item-center gap-2 ${categorypr === 'POTION' ? 'tagBtnActive' : ''} `}
                      onClick={() => setCategorypr('POTION')}>
                      <img src={productCategoryImg03} alt="" />Potion
                    </button>
                    <button className={`d-flex align-item-center gap-2 ${categorypr === 'BOOK SKILL' ? 'tagBtnActive' : ''} `}
                      onClick={() => setCategorypr('BOOK SKILL')}>
                      <img src={productCategoryImg03} alt="" />Book Skill
                    </button>

                  </div>
                </Col>

                <div className="product__category2 d-flex                 
               gap-4">

                  {
                    btnpr2list.cate.map((item, index) => (
                      <button className={`d-flex align-content-center gap-2 ${categorypr2 === item.name ? 'tagBtnActive' : ''} `}
                        onClick={() => setCategorypr2(item.name)} key={index}>
                        {item.name}
                      </button>
                    ))
                  }

                </div>


                {
                  allProductspr.map((item) => (
                    <Col md='4' sm='6' xs='6' key={item.id} className='colwidth mt-5'>
                      <ProductCard item={item} />
                    </Col>
                  ))
                }

              </Row>
            </Container>
          </section>

        </div>





        <div className='v-shop4 pt-5'>

          <section className='why__choose-us pt-5'>
            <Container>
              <Row>
                <Col lg='6' md='6' className='col_img_why'>
                  <img src={whyImg} alt="why-text-treat" className='why_img' />
                </Col>

                <Col lg='6' md='6'>
                  <div className="why__tasty-treat">
                    <h2 className='tasty__treat-title'>
                      Why <span>Wuxia Phos ?</span>
                    </h2>
                    <p className='chose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur facere pariatur assumenda magni numquam asperiores,  </p>
                    <ListGroup className='mt-4'>
                      <ListGroupItem className='border-0 ps-0'>
                        <p className='chose__us-title  d-flex align-item-center gap-2'>
                          <i class="ri-checkbox-circle-line"></i>
                          High Quality</p>
                        <p className='chose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure inventore. Autem adipisci consequatur quo culpa at.</p>

                      </ListGroupItem>

                      <ListGroupItem className='border-0 ps-0'>
                        <p className='chose__us-title d-flex align-item-center gap-2'>
                          <i class="ri-checkbox-circle-line"></i>
                          Quality support</p>
                        <p className='chose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. , nam voluptates asperiores!</p>
                      </ListGroupItem>

                      <ListGroupItem className='border-0 ps-0'>
                        <p className='chose__us-title  d-flex align-item-center gap-2'>
                          <i class="ri-checkbox-circle-line"></i>
                          identity security</p>
                        <p className='chose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. , nam voluptates asperiores!</p>
                      </ListGroupItem>
                    </ListGroup>

                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            <Container>
              <Row>
                <Col lg='12' className='text-center'>
                  <h5 className='feature__subtitle '>What we serve</h5>
                </Col>
                {
                  featureData.map((item, index) => (
                    <Col lg='4' md='6' sm='6' key={index} className='mt-1'>
                      <div className="feature__item text-center px-5 py-3">
                        <img src={item.imgurl} alt="feature-img"
                          className='w-25 mb-3' />
                        <h5 className='fw-bold'>{item.title}</h5>
                        <p>{item.desc}</p>
                      </div>
                    </Col>
                  ))
                }
              </Row>
            </Container>
          </section>
        </div>


      </div>


    </Helmet >
  )
}

export default Home