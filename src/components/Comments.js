import React from 'react';
import api from '../utils/Api.js'
import  { dataFormat } from '../utils/dataFormat'

function Comments (props) {
  const id = props.id;
  const [data, setData] = React.useState([]);
  const date = dataFormat(data.time);
  const [commentClick, setCommentClick] = React.useState(false)

  React.useEffect(()=> {
    getNews(id)
  },[props])

// запрос карточки
  function getNews(id) {
    api.getNews(id)
    .then((res)=> {
      setData(res)
    }) 
  }
  
  function createMarkup() {
    return {__html:` ${data.text}`};
  }

  function handleChildrenClick() {
    setCommentClick(!commentClick) 
  }
  
  return (
    <article className='comments__item'>
      <div className='comments__info'>
        <p className='comments__by'>{data.by}</p>
        <p className='comments__time'>{date.fullConvertDate}</p>
        {data.kids ? <p className='comments__back'>Ответов({data.kids.length})</p> :
        <p className='comments__back'>Ответов(0)</p>}
       </div>
      <div onClick={handleChildrenClick} className='comments__parent' dangerouslySetInnerHTML={createMarkup()} />
      
        <div className='comments__children'>
        {data.kids && commentClick && 
        data.kids.map((item)=> (
          <Comments id={item} key={item}/>
        ))
        }
        </div>
       
 
    </article>
  )
}

export default Comments;