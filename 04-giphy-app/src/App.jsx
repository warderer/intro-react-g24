import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [gifs, setSGifs] = useState([])
  const APIKEY = import.meta.env.VITE_GIPHY_APP_KEY

  // Las llamadas a API ocurren normalmente en el useEffect
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=30&offset=0&rating=g&bundle=messaging_non_clips`)// url de trending
      .then(res => res.json())// recibo mi respuesta copleta
      .then(results => {
        const { data } = results
        setSGifs(data)
      }).catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>
        <h1 className='title'>Giphy App</h1>
      </div>
    </>
  )
}

export default App
