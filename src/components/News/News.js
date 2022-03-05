import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './News.css';
import api from '../../utils/Api.js'
import { dataFormat } from '../../utils/dataFormat'
import Comments from './Comments.js'

function News(props) {
  let { id } = useParams();
  const [data, setData] = React.useState([])
  const comments = data.kids
  const history = useHistory(); 
  const date = dataFormat(data.time);

  React.useEffect(()=> {
    getNews(id)
  },[props])

  function getNews(id) {
    api.getNews(id)
    .then((res)=> {
      setData(res)
    }) 
  }

    // запрос комментарий
    function getComments(id) {
      console.log('znen')
      api.getNews(id)
      .then((res)=> {
        console.log(res)
        setData(res)
      }) 
    } 

    //Обновление страницы
  function handlerUpdate() {
    getComments(id)
  }
  return (
    <section className='news-card'>
    <article className='news-card__item'>
     <div className='news-card__info'>
       <button className='news__back' onClick={()=>history.goBack()}> Вернуться </button>
       <h1 className='news-card__title'>{data.title}</h1>
       <a className='news-card__url' href={data.url} target="_blank" rel="noopener noreferrer">Перейти на страницу новости</a>
       <p className='news-card__by'>Автор: <span>{data.by}</span></p>
       <p className='news-card__time'>Дата: {date.fullConvertDate}</p>
     </div>
     <div className='comments'>
      <h2 className='news-card__comment'>Комментарии:</h2>
      <button type='button' className='news__button_update' onClick={handlerUpdate}></button>
      {comments
      && comments.map((item)=> (
         <Comments id={item} key={item} />
         ))
      }
     </div>
    </article>
    </section>
  )
}

export default News;