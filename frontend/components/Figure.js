import React from "react"
import styled from "styled-components"

// After import of styled --> declare a component (a react component) of StyledFigure
const StyledFigure = styled.figure`
  // put in some styles
  
  /* justify-content: center; */
  padding-inline: 20%;

  figcaption {
    font-style: italic;
    text-align: center;
  }
`

export default function Figure({ figureImage, figureDate, figureAuthor }) {
    return (
      /* prev.
      <figure>
        <img src={imageURL}/>
        <figcaption>Picture taken on {figureDate}</figcaption>
      </figure> */

      <StyledFigure> {/* // prev. // Changed from <figure> after introducing StyledFigure*/}
          <img src={figureImage}/>
          <figcaption>Photo taken on {figureDate} by {figureAuthor}</figcaption>
      </StyledFigure>
    )
}


//**_________Previous attempt code below___________**//

/* import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  max-width: 50%;

  figcaption{
    font-style: italic;
  }

`

export default function Figure({imgURL, caption}) {
    return (
        <StyledFigure>
        <img src={imgURL}/>
        <figcaption>Interstellar photo taken on {caption}</figcaption>
      </StyledFigure>
    )
} */