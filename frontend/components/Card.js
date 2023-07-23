import React from 'react'
import Figure from './Figure'
import styled from 'styled-components'

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  padding: 1.5rem;
  h2 {
    font-size: 2rem;
    margin: 0 0 1rem 0;
  }
  p {
    margin: 0 0 1.5rem 0;
  }
`

export default function Card({title, text, imgURL, date}) {
    return (
      <StyledCard className = 'card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure
        imgURL={imgURL}
        caption={date}
      />
  
    </StyledCard>
    )
  }