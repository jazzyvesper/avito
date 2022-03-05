import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getId} from '../../store/api'
import './Home.css';
import NewsCard from './NewsCard';

function Home() {
  const dispatch = useDispatch()
  const id = useSelector(state => state.id.id)
  const [newsPage, setNewsPage] = React.useState(0);
  const [nextCards, setNextCards] = React.useState(0);
  const [newsShow, setNewsShow] = React.useState([]);
  const [update, setUpdate] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  //const limitId = sortArr(id.slice(0, 100))
  React.useEffect(()=> {
    dispatch(getId())
  },[])

  console.log(id)

 function sortArr(arr) {
  const NewMassiv = arr.sort(function(a, b) {
    if (a < b) return 1; 
    if (b < a) return -1;
    return 0;
    })
    return NewMassiv
}

  function checkWindowWidth() {
    setTimeout(() => setWindowWidth(window.innerWidth), 500);
  };

  React.useEffect(()=> {
    quantityNews(0, newsPage)
  },[ newsPage, id, update])
  
  //В зависимости от размера экрана отрисовывает определенное к-во новостей
  React.useEffect(()=> {
    window.addEventListener('resize', checkWindowWidth);
  
    if(window.innerWidth > 1020) {
      setNewsPage(9);
        setNextCards(6);
      } else if(window.innerWidth > 500 && window.innerWidth <= 1020) {
        setNewsPage(6);
        setNextCards(4);
      } else if(window.innerWidth < 500) {
        setNewsPage(3);
        setNextCards(2);
      }
      return () => window.removeEventListener('resize', checkWindowWidth);
  
  }, [windowWidth])

  //нарезка интервалов из массива id
  function quantityNews(start, finish) {
    setNewsShow(id.slice(start,finish))
  }

  // меняет количество добавленных новостей
  function handleNextClick() {
    quantityNews(0, newsShow.length + nextCards)
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
    {id.map((item)=> (
      <NewsCard id={item} update={update} key={item}/>
    ))}
    </div>
   <div className="news__next">
      <button onClick={handleNextClick} className="news__button_next" >Показать ещё</button>  
    </div>
    </section>
  )
}

export default Home;