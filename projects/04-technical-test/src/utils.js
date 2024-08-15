export function firstWordFrom (str) {
  const firstOccurrence = str.indexOf(' ')
  const firstWord = str.slice(0, firstOccurrence)

  return firstWord
}
