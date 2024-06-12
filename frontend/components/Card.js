import React from 'react'
import Figure from './Figure'
import styled from 'styled-components'


/* Create a styled div */
const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  padding: 1.5rem;
  justify-content: center;
  

  h2 {
    font-size: 2rem;
    margin: 0 0 1rem 0;
    
    /* color: ${pr => pr.color}; // prev. --> added
                                   * references to the added color='orange' below --> export default function Card ... <StyledDiv
                                   * Issue: The prop is applied to the div in the dom (For this instance we don't want that) 
                                   * --> this is not a proper action for adding a prop/attribute to a div */
    color: ${pr => pr.$color}; /** addition of $ prefix
                                 * This prefix addition will negate the attribute being pasted to the dom (being seen in dev tools) */
  }
  p {
    
    margin: 0 0 1.5rem 0;
    &::first-line {
      font-size: 1.5em;
      
    }
  }
`

export default function Card({ title, photoText, figureImage, figureDate, figureAuthor }) {
    return (
      /* <StyledDiv className='card'> // prev. */
      /* <StyledDiv color='orange' className='card'> // prev.2 */
      <StyledDiv $color='orange' className='card'>
        <h2>{title}</h2>
        <p>{photoText}</p>
        <Figure
            figureImage={figureImage}
            figureDate={figureDate}
            figureAuthor={figureAuthor}
        />
      </StyledDiv>
    )
}




//**_________Previous attempt code below___________**//

/* import React from 'react'
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
  } */