import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'; 
import './Home.css';
import {getNews} from '../../store/api'
import { dataFormat } from '../../utils/dataFormat'

function NewsCard(props) {
  const dispatch = useDispatch()
  const news = useSelector(state => state.news.data)
  //const date = dataFormat(news.time);
  console.log(props)

  React.useEffect(()=> {
    dispatch(getNews(props.id))
  },[])
 console.log(news)

  return (
    <article className='news__item'>
      <div className='news__info'>
      <Link className='news__title_link' to={`/${news.id}`}>
        <h2 className='news__title'>{news.title}</h2>
      </Link> 
      <div className='news__row'>
        <p className='news__descendants'><span className='news__rating'>{news.descendants}</span></p>
        <p className='news__by'>{news.by}</p>
        <p className='news__time'> </p>
      </div>
     </div>
    </article>
  )
}

export default NewsCard;