import { useEffect, useState } from 'react'

import { PREFIX_URL_CAT_IMAGE } from '../constants.js'
import { firstWordFrom } from '../utils.js'
import { getNewFact } from '../services/getNewFact.js'

export function useRandomFactAndImage () {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const updateFact = async () => {
    const newFact = await getNewFact()
    setFact(newFact)
    setImageUrl(`${PREFIX_URL_CAT_IMAGE}${firstWordFrom(newFact)}`)
  }

  useEffect(() => {
    updateFact()
  }, [])

  return { fact, imageUrl, updateFact }
}
