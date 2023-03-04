import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png'
import '../../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='logo footer__logo text-start' >
              <img src={logo} alt='logo ' />
              <h5>Wuxia Phos</h5>
              <p>ecsuscipit omnis ae inventore placeat libero ducimus praesentium repudiandae!</p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title '>Help</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className='footerele__item-time border-0 ps-0' >
                <span>Return/Exchanges</span>
                <p>helps@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='footerele__item-time border-0 ps-0'>
                <span>FAQ</span>
                <p>After pay</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title '>Contact</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className='footerele__item-time border-0 ps-0' >
                <p>Location: ZindaBazar,Sylhet-3100,Bangladest</p>
              </ListGroupItem>
              <ListGroupItem className='footerele__item-time border-0 ps-0' >
                <span>Phone: 012321343</span>
              </ListGroupItem>
              <ListGroupItem className='footerele__item-time border-0 ps-0'>
                <span>Email: dfdsfdas@gmail.com</span>

              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title '>Newsletter</h5>
            <p>Subscribe out newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your email' />
              <span><i class="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>


        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright_text'>Copy right -2023 ,website made by PTVU. All Right reserved</p>
          </Col>
          <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>Follow: </p>
              <span>
                {" "}
                <Link to='https://www.facebook.com'><i class="ri-facebook-line"></i></Link>
              </span>
              <span>
                {" "}
                <Link to='https://www.github.com'><i class="ri-github-line"></i></Link></span>
              <span>
                {" "}
                <Link to='https://www.youtube.com'><i class="ri-youtube-line"></i></Link></span>
              <span>
                {" "}
                <Link to='https://www.linkedin.com'><i class="ri-linkedin-line"></i></Link></span>
            </div>
          </Col>
        </Row>
      </Container>

    </footer>
  )
}

export default Footer