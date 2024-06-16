import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import { createClient } from "contentful";

async function getProducts() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const res = await client.getEntries({ content_type: "gundalingProducts" });
    return res.items;
  } catch (error) {
    console.log(error);
  }
}

async function ProductPage() {
  const products = await getProducts();
  return (
    <section id="productMainSection" className={styles.classSection}>
      <div className="container text-center mt-3 p-3">
        <div className="row justify-content-center mb-3">
          <h3 className="text-center" data-aos="fade-down">
            Our Products
          </h3>
          <p className="text-center" data-aos="fade-down">
            Transforming Ideas into Vibrant Reality: Explore Our Digital
            Printing Solutions
          </p>
        </div>
        <div
          className="row justify-content-center m-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {products.map((product) => {
            return (
              <ProductCard key={product.sys.id} item={product}></ProductCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
