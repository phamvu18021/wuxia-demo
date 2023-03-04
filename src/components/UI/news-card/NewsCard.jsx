import React from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/news-card.css'
 const NewsCard = (props) => {

  const { id, title,date, image01,introduce } = props.item;
  const isodd=((id) => Number(id)%2 === 0 ? "news__item" : "news__item2"   ) 
  return (
   <div className= {isodd(props.item.id)}>
    <div className='news__img'>
      <Link to={`/news/${id}`}><img src={props.item.image01} alt="product item" /> </Link>
 
    </div>
    <div className="news__content">
      <p className='news__date'>{props.item.date}</p>
      <h4 className="news__title">{props.item.title}</h4>
      <p className='news_introduce'>{props.item.introduce}</p>
      <p className="btn__news"><Link to={`/news/${id}`}>See More <i class="ri-arrow-right-line"></i></Link></p>
    </div>

   </div>
  )
}
export default NewsCard