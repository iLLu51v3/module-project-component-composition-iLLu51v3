import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`


export default function App() {

  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    // fetchPhoto()
    setApod({
          "date": "2023-07-21",
          "explanation": "The combined light of stars along the Milky Way are reflected by these cosmic dust clouds that soar 300 light-years or so above the plane of our galaxy. Known to some as integrated flux nebulae and commonly found at high galactic latitudes, the dusty galactic cirrus clouds are faint. But they can be traced over large regions of the sky toward the North and South Galactic poles. Along with the reflection of starlight, studies indicate the dust clouds produce a faint reddish luminescence as inters...",
          "hdurl": "https://apod.nasa.gov/apod/image/2307/MandelWilson9_GabrielRodriguesSantos_APOD.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "Galactic Cirrus: Mandel Wilson 9",
          "url": "https://apod.nasa.gov/apod/image/2307/MandelWilson9_GabrielRodriguesSantos_APOD1024.jpg"
        })
  }, [])

  if (!apod) return 'Fetching The Photo of the Day'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imgURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}


