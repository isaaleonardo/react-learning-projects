import { useEffect, useState } from 'react'
import { firstWordFrom } from './utils.js'

const URL_CAT_RANDOM_FACT = 'https://catfact.ninja/fact'
const PREFIX_URL_CAT_IMAGE = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState('')

  useEffect(() => {
    getNewFact()
  }, [])

  const getNewFact = () => {
    fetch(URL_CAT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const newFact = data.fact
        setFact(newFact)
      })
  }

  return (
    <main>
      <h1>Little cats facts</h1>
      <button onClick={getNewFact}>Get new fact</button>
      <p>{fact}</p>
      <img src={`${PREFIX_URL_CAT_IMAGE}${firstWordFrom(fact)}`} alt='Image extracted using the first word of cat fact' />
    </main>
  )
}
