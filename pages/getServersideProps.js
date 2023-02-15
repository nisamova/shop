//Option 3 getServerSideProps function of Next.js this fetches products on the serverside
/* Serverside renders at run time (has lambda sign to it in terminal  after building */
import { getProducts } from "lib/products"
import Head from "next/head"
import Title from "../components/Title"

export async function getServerSideProps() {
  console.log("[HomePage] getServerSideProps()")
  const products = await getProducts()
  return { props: { products } }
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
        <p> Some staff to do new one</p>
      </main>
    </>
  )
}

export default HomePage

/** The data also up to date with this function refetches data at every request, responce slower since everytime user makes request we are fetching the data, potentially lots of request to backend or database, thus the appliucation is less scalable.  */
