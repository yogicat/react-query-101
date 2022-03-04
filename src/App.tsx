import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

function App() {
  const queryInfo = useQuery<PokemonQuery>('pokemon', () =>
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.data.results)
  )

  console.log(queryInfo)

  return (
    <div>
      <h1>Hello React Query</h1>
      {queryInfo.data.map((result) => (
        <div key={result.name}>{result.name}</div>
      ))}
    </div>
  )
}

export default App
