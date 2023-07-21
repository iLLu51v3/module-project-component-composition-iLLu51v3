import React from 'react'
import Figure from './Figure'


export default function Card({title, text, imgURL, date}) {
    return (
      <div className = 'card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure
        imgURL={imgURL}
        caption={date}
      />
  
    </div>
    )
  }