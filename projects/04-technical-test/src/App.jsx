import { useEffect, useState } from 'react'
import { firstWordFrom } from './utils.js'

import { PREFIX_URL_CAT_IMAGE } from './constants.js'
import getNewFact from './services/getNewFact.js'

export function App () {
  const [fact, setFact] = useState('')

  const handleClick = async () => {
    const newFact = await getNewFact()
    setFact(newFact)
  }

  useEffect(handleClick, [])

  return (
    <main>
      <h1>Little cats facts</h1>
      <button onClick={handleClick}>Get new fact</button>
      <p>{fact}</p>
      <img src={`${PREFIX_URL_CAT_IMAGE}${firstWordFrom(fact)}`} alt='Image extracted using the first word of cat fact' />
    </main>
  )
}
