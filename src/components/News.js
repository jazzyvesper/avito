import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../utils/Api.js'
import { dataFormat } from '../utils/dataFormat'
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


    //Обновление страницы
  function handlerUpdate() {
    getNews(id)
  }
  return (
    <section className='news-card'>
      {data &&
      <article className='news-card__item'>
        <div className='news-card__info'>
          <button className='news__back' onClick={()=>history.goBack()}> Вернуться </button>
          <h1 className='news-card__title'>{data.title}</h1>
          <a className='news-card__url' href={data.url} target="_blank" rel="noopener noreferrer">Перейти на страницу новости</a>
          <p className='news-card__by'>Автор: <span>{data.by}</span></p>
          <p className='news-card__time'>Дата публикации: {date.fullConvertDate}</p>
        </div>
        <div className='comments'>
          <div className='comments__title'>
            <h2 className='news-card__comment'>Комментарии:</h2>
            <button type='button' className='news__button_update' onClick={handlerUpdate}></button>
          </div>
          {comments ? comments.map((item)=> (
            <Comments id={item} key={item} />
            ))
          : <p className='comments__info_text'>Пока нет комментариев</p>
          }
         </div>  
      </article>
      }
    </section>
  )
}

export default News;