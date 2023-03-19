/* Option 2: index 2b.js fetch products on the client side (in useEffect ), this one ensures the latest data is displayed, requures internal API route
this one uses internal API, where the incoming API refactored to tailor smaller data (reduces the data size when created via api route) or more specific data.
*/

import Head from "next/head"
import { useEffect, useState } from "react"
import Title from "../components/Title"

function HomePage() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    ;(async () => {
      const response = await fetch("/api/products")
      const products = await response.json()
      setProducts(products)
    })()
  }, [])
  console.log("[HomePage] render:", products)
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title> Next-Shop</Title>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
        <p> Some staff to do 15 </p>
      </main>
    </>
  )
}

export default HomePage
