function stripProduct(product) {
  return {
    id: product.id,
    title: product.title,
    description: product.description
  }
}
//function to fetch a data for a sinle product
export async function getProduct(id) {
  const response = await fetch(`http://127.0.0.1:1337/products/${id}`)
  const product = await response.json()
  return stripProduct(product)
}

// fetches all the products
export async function getProducts() {
  const response = await fetch("http://127.0.0.1:1337/products")
  const products = await response.json()
  return products.map(stripProduct)
}
