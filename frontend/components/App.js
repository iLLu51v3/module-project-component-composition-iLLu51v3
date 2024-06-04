import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

/* - [ ] Go to the [NASA APOD API docs](https://api.nasa.gov/#apod) and learn how to make the API call.*/

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

/* function Figure({ imageURL, figureDate }) {
  <figure>
    <img src={imageURL}/>
    <figcaption>Picture taken on {figureDate}</figcaption>
  </figure>
} */
/* function Card({ title, PhotoText, imageURL, date }) {
  return(
    <div className='card'>
      <h2>{title}</h2>
      <p>{PhotoText}</p>
      <Figure
      imageURL={imageURL}
      figureDate={date}
      />
    </div>
  )
} */

export default function App() {
  // add state for the data you'll get from NASA.
  const [apod, setApod] = useState()
  
  /** Add an effect hook to handle the API call side effect after the first render of App.
  * [ ] Using the endpoint given in the docs, fetch the data using `axios`, which is already installed in the project.
  * [ ] In your `.then()` make sure to `console.log` the response so you can look at the shape of the data. 😃
  * [ ] Before you add your data to state, make sure your effect hook has a dependencies array. Otherwise, you will start an **infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to request a real API key.**
  */
  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL) 
        .then(res => {
          console.log(res)
          setApod(res.data)
        }).catch(err => {
          console.log(err.message)
        })
    }
    /** invoke fetch photo.
    * Check DevTools/Network to view the outgoing GET (axios.get) request.
    * [Status] 200 is Good.
    * [Preview] is the response (res.data)
    * Turn off (comment out) the fxn invocation to not have api requests be over used
    * Next: Where to put the reponse request data
    * have the res.data become the setApod
    * check devTools console for the console.log(res)
    */   
    // fetchPhoto() 

    setApod({ 
      // hard code the api data response. Directly setting the res.data to the slice of state. This will come up even when fetchPhoto is not invoked/commented out
      "date": "2023-07-21",
      "explanation": "The combined light of stars along the Milky Way are reflected by these cosmic dust clouds that soar 300 light-years or so above the plane of our galaxy. Known to some as integrated flux nebulae and commonly found at high galactic latitudes, the dusty galactic cirrus clouds are faint. But they can be traced over large regions of the sky toward the North and South Galactic poles. Along with the reflection of starlight, studies indicate the dust clouds produce a faint reddish luminescence as inters...",
      "hdurl": "https://apod.nasa.gov/apod/image/2307/MandelWilson9_GabrielRodriguesSantos_APOD.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Galactic Cirrus: Mandel Wilson 9",
      "url": "https://apod.nasa.gov/apod/image/2307/MandelWilson9_GabrielRodriguesSantos_APOD1024.jpg"
    })
  }, [])

  if (!apod) 
    return 'Fetching The Photo of the Day...'
  return (
    <section>
      <Card /*Card & Figure require the props to display */
      title={apod.title}
      PhotoText={apod.explanation}
      imageURL={apod.url}
      figuereDate={apod.date}
      />
    </section>
  )
  /** Break up parts of a growing fxn into separate component(s) (making a new function &/or a new file)
   * When built, Move contents of Card and Figure to a new component file. Be sure to create import Card.js and create a funtion on this file to call on Card.js props to import the data
   * <div className='card'> 
   * <h2>{apod.title}</h2>
   * <p>{apod.explanation}</p>
   * <figure>
   * <img src={apod.url}/>
   * <figcaption>Picture taken on {apod.date}</figcaption>
   * </figure>
   * </div> */
}

/* <span role="img" aria-label='go!'>🚀</span>! */

/**  
* ## Task 5: Consuming the data
* [ ] Once you have made the call correctly, and logged the data, add the data to the state property you built.
* [ ] Build out your other components. Compose your UI, and then pass the data to your children components via props so you can render it on the DOM.
*/




//**_________Previous attempt code below___________**//

// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import Card from './Card'

// const api_key = 'DEMO_KEY'
// const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`


// export default function App() {

//   const [apod, setApod] = useState()
//   useEffect(() => {
//     function fetchPhoto() {
//       axios.get(URL)
//         .then(res => {
//           console.log(res.data)
//           setApod(res.data)
//         })
//         .catch(err => {
//           console.log(err.message)
//         })
//     }
//     // fetchPhoto()
//     setApod({
//           "date": "2023-07-21",
//           "explanation": "The combined light of stars along the Milky Way are reflected by these cosmic dust clouds that soar 300 light-years or so above the plane of our galaxy. Known to some as integrated flux nebulae and commonly found at high galactic latitudes, the dusty galactic cirrus clouds are faint. But they can be traced over large regions of the sky toward the North and South Galactic poles. Along with the reflection of starlight, studies indicate the dust clouds produce a faint reddish luminescence as inters...",
//           "hdurl": "https://apod.nasa.gov/apod/image/2307/MandelWilson9_GabrielRodriguesSantos_APOD.jpg",
//           "media_type": "image",
//           "service_version": "v1",
//           "title": "Galactic Cirrus: Mandel Wilson 9",
//           "url": "https://apod.nasa.gov/apod/image/2307/MandelWilson9_GabrielRodriguesSantos_APOD1024.jpg"
//         })
//   }, [])

  // if (!apod) return 'Fetching The Photo of the Day'
  // return (
  //   <section>
  //     <Card
  //       title={apod.title}
  //       text={apod.explanation}
  //       imgURL={apod.url}
  //       date={apod.date}
  //     />
  //   </section>
  // )
// }


