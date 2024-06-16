import Image from "next/image";
import hero from "../../../../public/hero.jpg";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createClient } from "contentful";
import LinkButton from "@/components/LinkButton/LinkButton";
import SideLink from "@/components/SideLink/SideLink";

async function getProductsBySlug(slug) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const res = await client.getEntries({
      content_type: "gundalingProducts",
      "fields.slug": slug,
    });
    return res.items;
  } catch (error) {
    console.log(error);
  }
}

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

async function ProductDetailsPage({ params }) {
  const slug = params.slug;
  const contentAll = await getProducts();
  const contentByID = await getProductsBySlug(slug);
  const contentVariance = contentByID[0].fields.variance;
  console.log(contentAll[0].fields.title);

  return (
    <section id="product-details" className="product-details">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="product-details-list d-none d-lg-block">
              {contentAll.map((content, index) => {
                return (
                  <SideLink
                    key={content.fields.title}
                    linkItem={content.fields.slug}
                  >
                    {content.fields.title}
                  </SideLink>
                );
              })}
            </div>

            <h4>Not product that you need?</h4>
            <p>
              Feel free to click on this back to product button. You'll be
              redirected to our list product page or you can go to Contacts and
              ask us any question regarding your needs!
            </p>
            <LinkButton href={`/products`}>
              <span>Product List</span>
              <i className="bi bi-arrow-left"></i>
            </LinkButton>
          </div>

          <div className="col-lg-8">
            <Image
              src={`https:${contentByID[0].fields.featuredImage.fields.file.url}`}
              alt="image-details"
              priority
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              width={200}
              height={200}
              className="img-fluid products-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
            <h3>{contentByID[0].fields.title}</h3>
            <p className="text-start">
              {contentByID[0].fields.longDescription}
            </p>
            <p>
              Some of the following items are product variants that you can find
              in this product category, including:
            </p>
            <ul>
              {contentVariance.map((variant) => {
                return (
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>{variant}</span>
                  </li>
                );
              })}
            </ul>

            <p>{contentByID[0].fields.longDescription2}</p>
          </div>
        </div>
        <div className="text-center"></div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
