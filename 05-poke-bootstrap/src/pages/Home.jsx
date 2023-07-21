import { useState, useEffect } from 'react'

const Home = () => {
  const [pokemons, setPokemons] = useState([]) // Lista de pokemones

  // Llamada a la api de pokemones
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(res => res.json())
      .then(data => setPokemons(data.results)) // arreglo de pokemones
      .catch(error => console.error(error))
  }
  , [])

  return (
    <>
      <div className='container'>
        <h1>Home</h1>
        <div className='row'>
          {
            pokemons.map(pokemon => (

              <div className='col-4' key={pokemon.name}>
                <div className='card'>
                  <div className='card-body'>
                    <img
                      className='card-img-top'
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                      alt={pokemon.name}
                    />
                    <h5 className='card-title'>{pokemon.name}</h5>
                  </div>
                </div>
              </div>

            )

            )

          }

        </div>
      </div>
    </>
  )
}
export default Home
