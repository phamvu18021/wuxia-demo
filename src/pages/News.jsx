import React from 'react'
import '../styles/news.css'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import NewsCard from '../components/UI/news-card/NewsCard'
import Helmet from '../components/Helmet/Helmet'

import news from '../assets/fake-data/news'
const News = () => {


  return (
    <Helmet title="-News">
      <CommonSection title="NEWS " />
      <Container className='news_container'>
        <Row className='d-flex' >
          <Col lg='12' md='12' sm='12'>
           <p className='news__header'>NEWS</p> 
          </Col>
          {
            news.map((item) => (
              <Col lg='12' md='12' sm='12' className='mb-5 pl-5 d-flex ' key={item.id}>
                <NewsCard item={item} />
              </Col>
            ))
          }

        </Row>
      </Container>
    </Helmet>
  )
}
export default News