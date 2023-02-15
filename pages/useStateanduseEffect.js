// Option 2: fetch products on the client side (in useEffect ), this one ensures the latest data is displayed

import { getProducts } from "lib/products"
import Head from "next/head"
import { useEffect, useState } from "react"
import Title from "../components/Title"

function HomePage() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts().then(setProducts)
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
        <p> Some staff to do 14 </p>
      </main>
    </>
  )
}

export default HomePage

//the page is preloaded but the indivudual products are not, so we get empty array this is typical react client side app works, here useeffect fires up to laod individual product however at first it is empty so the array of products are hydrated on the client side (SEO purpose does not display each product so not ideal for SEO) This will display the lates data available , so up to date information or text
