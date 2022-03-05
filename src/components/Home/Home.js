import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getId, getNews} from '../../store/api'
import './Home.css';
import NewsCard from './NewsCard';

function Home(props) {
  const dispatch = useDispatch()
  const news  = useSelector(state => state.news.data)
  const [newsPage, setNewsPage] = React.useState(0);
  const [nextCards, setNextCards] = React.useState(0);
  const [newsShow, setNewsShow] = React.useState([]);
  const [update, setUpdate] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(()=> {
    if(props.id.length > 0) {
      props.id.map((i)=> {
      dispatch(getNews(i))
     })
    }
  },[props.id])

  
  console.log(props)
  console.log(news)

  //Обновление страницы
  function handlerUpdate(params) {
    window.location.reload();
  }
  return (
    <section className='home'>
      <div className='home__main'>
        <h1 className='home__title'>Тестовое задание: интерфейс для сайта Hacker News</h1>
        <button type='button' className='news__button_update' onClick={handlerUpdate}></button>
      </div>
    <div className='home__items'>
    {news.length > 0 && 
    news.map((item)=> (
      <NewsCard news={item} update={update} key={item.id}/>
    ))}
    </div>
   <div className="news__next">
      <button  className="news__button_next" >Показать ещё</button>  
    </div>
    </section>
  )
}

export default Home;