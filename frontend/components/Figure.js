import React from 'react'


export default function Figure({imgURL, caption}) {
    return (
        <figure>
        <img src={imgURL}/>
        <figcaption>Interstellar photo taken on {caption}</figcaption>
      </figure>
    )
}