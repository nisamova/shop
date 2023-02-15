//Option 3 Incremental static Regeneration ISR
/*Revalidate with getStaticProps, this approach fetch products on the server -- HTML preredered and better for SEO, then it will revalidate itself meaning rebuilds itself based on times you indicate on your fetch function*/
import { getProducts } from "lib/products"
import Head from "next/head"
import Title from "../components/Title"

export async function getStaticProps() {
  console.log("[HomePage] getStaticProps()")
  const products = await getProducts()
  return { props: { products }, revalidate: 10 * 30 }
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
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
        <p> ISR or Revalidate option for getStatic Props Page February </p>
      </main>
    </>
  )
}

export default HomePage

/** Since next.js does not know how often or when did your data changes so every time as you indicated /the time interval in your revalidate function the application will keep updating
 * Case Study: Blog Page of architects website
 */
