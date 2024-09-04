const URL = 'https://dummyjson.com/products'

export async function searchProducts () {
  try {
    const response = await fetch(URL)
    const json = await response.json()

    return json.products.map(product => {
      return {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        category: product.category
      }
    })
  } catch (e) {
    throw new Error('Error searching products')
  }
}
