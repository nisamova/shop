import { getProducts } from "lib/products"
import Head from "next/head"
import Title from "../components/Title"
import ProductCard from "components/ProductCard"

export async function getStaticProps() {
  console.log("[HomePage] getStaticProps()")
  const products = await getProducts()
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS)
  }
}
function HomePage({ products }) {
  console.log("[HomePage] render:", products)
  return (
    <>
      <Head>
        <title>Shop </title>
      </Head>
      <main className="px-6 py-4">
        <Title> Next-Shop</Title>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <li key={product.id}>
              {" "}
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        <p> ISR or Revalidate option for getStatic Props Page Homepage </p>
      </main>
    </>
  )
}

export default HomePage
