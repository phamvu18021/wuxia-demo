import React from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/news-card2.css'
const NewsCard2 = (props) => {

    const { id, title, date, image01, category } = props.item;

    return (
        <div className='news2__item'>
            <div className='news2__img'>
                <Link to={`/news/${id}`}><img src={props.item.image01} alt="product item" /> </Link>

            </div>
            <div className="news2__content">
                <div className='d-flex mt-2 mb-1'>
                    <p className='news2__date '>{props.item.date} .</p>
                    <p className='news2_category '>{props.item.category}</p>
                </div>

                <p className="news2__title">{props.item.title}</p>


            </div>

        </div>
    )
}
export default NewsCard2