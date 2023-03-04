import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { useParams } from 'react-router-dom'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import news from '../assets/fake-data/news'
import "../styles/news-details.css"
const NewsDetails = () => {
  const { id } = useParams();
  const newss = news.find(newss => newss.id === id)
  const { title, date, category, image01, image02, desc, author } = newss;

  return (
    <Helmet title={title}>
      <section>
        <div className="newss_img1">
          <img src={image01} alt="" />
        </div>

        <Container>
          <Row>
            <Col lg='12' md='12' sm="12">
              <p className='newss_date'>{date}  .</p>
              <p className='newss_cate'>{category}</p>
              <p className='newss_title'>{title}</p>
            </Col>

          </Row>
          <Row>
            <Col lg='8' md='12' sm='12' className='news__main'>
              {desc}
            </Col>

            <Col lg='4' md='12' sm='12' className='newss_img'>
              <img src={image02} alt="anh minh hoa" />
            </Col>
            <div className="newss_author mt-5">
              <p>Author :{author}</p>
            </div>

          </Row>
        </Container>

      </section>

    </Helmet>
  )
}
export default NewsDetails;