import React from 'react';
import { format } from 'date-fns'
import './Card.css';

type CardProps = {
  title: string,
  date: Date,
  imgUrl: string,
  hdImgUrl: string,
  description: string,
  copyright?: string,
}

const Card = (cardProps: CardProps) =>
  <section className='-cornflower-blue-bc -padding-10px -margin-v-10px -border-radius-15px -grid-container'>
    <h1 className='title -bold -coral-c -font-size-lg -text-align-center -margin-2'>{cardProps.title}</h1>
    <time className='date -bold -text-align-right -margin-2'>{format(cardProps.date, 'MM/dd/yyyy')}</time>
    <figure className='figure -margin-2'>
      <a href={cardProps.hdImgUrl}>
        <img className='-max-width-100' src={cardProps.imgUrl} alt='See description attached.'/>
      </a>
      {
        cardProps.copyright &&
        <figcaption className='-margin-t-2px'>{'Copyright: '.concat(cardProps.copyright)}</figcaption>
      }
    </figure>
    <p className='description -margin-2 -text-align-justify'>{cardProps.description}</p>
  </section>;

export default Card;