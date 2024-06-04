import React from "react"

export default function Figure({ imageURL, figureDate }) {
    return (
        <figure>
            <img src={imageURL}/>
            <figcaption>Picture taken on {figureDate}</figcaption>
        </figure>
    )
}


//**_________Previous attempt code below___________**//

// import React from 'react'
// import styled from 'styled-components'

// const StyledFigure = styled.figure`
//   max-width: 50%;

//   figcaption{
//     font-style: italic;
//   }

// `

// export default function Figure({imgURL, caption}) {
//     return (
//         <StyledFigure>
//         <img src={imgURL}/>
//         <figcaption>Interstellar photo taken on {caption}</figcaption>
//       </StyledFigure>
//     )
// }