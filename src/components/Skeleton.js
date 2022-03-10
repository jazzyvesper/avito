import React from 'react';
import './Skeleton.css';

const Pattern = (props) => {
  return (
    <article className='news__item skeleton__item'>
      <div className='skeleton__title'><span className="flare"></span></div>
      <div className='skeleton__row'>
        <div className='skeleton__icon'><span className="flare"></span></div>
        <div className='skeleton__icon'><span className="flare"></span></div>
        <div className='skeleton__icon'><span className="flare"></span></div>
      </div>
    </article>
  ) 
}

function Skeleton(props) {
  return (
    <section className='sceleton'>
     { [...Array(3)].map((item, index) =>   <Pattern key={index} /> ) }     
    </section>
  ) 
}

export default Skeleton;