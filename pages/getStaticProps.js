//Option 1 fetch products on the server -- HTML preredered and better for SEO
import { getProducts } from "lib/products"
import Head from "next/head"
import Title from "../components/Title"

export async function getStaticProps() {
  console.log("[HomePage] getStaticProps()")
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

//Prerendered !!! here the page itself and all the products are prebuild and send as HTML document to browser. This is IDEAL for SEO where search engines can index the page, this is also fast. Problem caused if the data changes so if you have data that needs to bebchnaged all the time this approach is no go
/* Unless the page is rebuild by the developer or the backend the content will stay old, this involves pulling the application to IDE and then pushing command of Next. js for building application. each case could be different and each web application does have different contetn to dsiplay, 
Case Staudy: for example building webiste for Architects, the Proejcts page( all the projects that architects worked) could be static cause that does not change offen but this approach would be effective for blog page of architects */
