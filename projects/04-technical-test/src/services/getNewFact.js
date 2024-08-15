import { URL_CAT_RANDOM_FACT } from '../constants.js'

export function getNewFact () {
  return fetch(URL_CAT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const newFact = data.fact
      return newFact
    })
}
