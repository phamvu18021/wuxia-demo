import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import categoryImg01 from '../../../assets/images/category-01.png'
import categoryImg02 from '../../../assets/images/category-02.png'
import categoryImg03 from '../../../assets/images/category-03.png'
import categoryImg04 from '../../../assets/images/category-04.png'
import '../../../styles/category.css'
const categoryData = [
    {
        display: "WEAPON",
        imgUrl: categoryImg01
    },
    {
        display: "ARMOR",
        imgUrl: categoryImg02
    },
    {
        display: "POTION",
        imgUrl: categoryImg03
    },
    {
        display: "SKILL BOOK",
        imgUrl: categoryImg04
    },


]
const Category = () => {
    return (
        <Container>
            <Row>
                {
                    categoryData.map((item, index) => (
                        <Col lg='3' md='4' sm='6' xs='6' className='mb-4'>
                            <div className="category__item d-flex align-items-center gap-3">
                                <div className="catefory__img">
                                    <img src={item.imgUrl} alt='category__iem' />
                                </div>
                                <p className='category__title'>
                                    {item.display}
                                </p>
                            </div>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    )
}

export default Category