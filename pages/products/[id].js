import { getProducts, getProduct } from "../../lib/products"
import Head from "next/head"
import Title from "../../components/Title"

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map(product => ({
      params: { id: product.id.toString() }
    })),
    fallback: false
  }
}
// passing props to react component with product data to display
export async function getStaticProps({ params: { id } }) {
  const product = await getProduct(id)
  return {
    props: { product }
  }
}

function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <main className="px-6 py-4">
        {" "}
        <Title>{product.title}</Title>
        <p>{product.description}</p>
      </main>
    </>
  )
}

export default ProductPage
