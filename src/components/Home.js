import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getId, getNews} from '../store/api'
import NewsCard from './NewsCard';
import Skeleton from './Skeleton'

function Home(props) {
  const dispatch = useDispatch()
  const {news, status, error} = useSelector(state => state.news)
  const [newsShow, setNewsShow] = React.useState([]);
 
  React.useEffect(()=> {
    getApiNews()
  },[props.id])
  
  function getApiNews(){
    if(props.id.length > 0) {
      props.id.map((i)=> {
      dispatch(getNews(i))
     })
    }
  }

  React.useEffect(()=> {
     newsShow.length<9 &&
      quantityNews(0, 9)
  },[news])
  
   //нарезка интервалов из массива id
   function quantityNews(start, finish) {
    setNewsShow(news.slice(start,finish))
  }

// меняет количество добавленных новостей
  function handleNextClick() {
    quantityNews(0, newsShow.length + 6)
  }

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
    {props.skeleton === 'loading' || status === 'loading' ? <Skeleton /> :
    news.length > 0 && 
    newsShow.map((item)=> (
      <NewsCard news={item} key={item.id}/>
    ))}
    </div>
    {news.length > 20 && newsShow.length < 100 &&
   <div className="news__next">
      <button onClick={handleNextClick} className="news__button_next" >Показать ещё</button>  
    </div>
    }
    </section>
  )
}

export default Home;