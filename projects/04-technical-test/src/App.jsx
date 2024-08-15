import { useRandomFactAndImage } from './hooks/useRandomFactAndImage.js'

export function App () {
  const { fact, imageUrl, updateFact } = useRandomFactAndImage()

  return (
    <main>
      <h1>Little cats facts</h1>
      <button onClick={updateFact}>Get new fact</button>
      {fact && (
        <>
          <p>{fact}</p>
          <img src={imageUrl} alt='Image extracted using the first word of cat fact' />
        </>
      )}
    </main>
  )
}
