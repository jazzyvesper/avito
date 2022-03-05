import React from 'react';
import './ModalFilter.css';


function ModalFilter(props) {

  return (
    <section className='modal'>
      <div className='modal__container'> 
        <ul className='modal__list'>
          <li className='modal__point'>Сортировка по дате</li>
          <li className='modal__point'>Сортировать по автору</li>
           <li className='modal__point'>Сортировать по рейтингу</li>
        </ul>
      </div>
    </section>
  )
}

export default ModalFilter;