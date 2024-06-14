import ProductCard from "@/components/ProductCard/ProductCard";
import { createClient } from "contentful";

async function getProducts() {
  try {
    const client = createClient({
      space: "c941eau70nq2",
      accessToken: "dfnrd_THPqGDUTUtWHIbn6QBqUfJpZXyazjuZ6TihLM",
    });

    const res = await client.getEntries({ content_type: "gundalingProducts" });
    return res.items;
  } catch (error) {
    console.log(error);
  }
}

async function ProductPage() {
  const products = await getProducts();
  console.log(products);
  return (
    <section id="projectSection">
      <div className="container text-center mt-3 p-3">
        <div className="row justify-content-center">
          <h3>Some project(s) that I have been worked before...</h3>
        </div>
        <div className="row justify-content-center m-2">
          {products.map((product) => {
            return (
              <ProductCard key={product.sys.id} item={product}></ProductCard>
            );
          })}
          {/* <div className="col-md-4 p-3">
            <div className="card">
              <img src="/about.png" alt="" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title text-primary">
                  Admission Online System(s) BINUS University & Schools
                </h4>
                <p className="card-text">
                  Application for enrolment at BINUS Educational Institution.
                </p>
                <button className="btn btn-lg btn-outline-primary">
                  <a
                    href="http://www.binus.edu/admissions"
                    target="_blank"
                    className=" hover-icon"
                  >
                    Visit <i className="fa-regular fa-share-from-square"></i>
                  </a>
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="col-md-4 p-3">
            <div className="card">
              <img src="/about.png" alt="" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title text-primary">
                  E-Desk Learning Management System (BINUS SCHOOLS)
                </h4>
                <p className="card-text">
                  Application for teaching and learning activities at Bina
                  Nusantara School(s)
                </p>
                <button className="btn btn-lg btn-outline-primary">
                  <a
                    href="http://e-desk.binus.sch.id"
                    target="_blank"
                    className=" hover-icon"
                  >
                    Visit <i className="fa-regular fa-share-from-square"></i>
                  </a>
                </button>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-4 p-3">
            <div className="card">
              <img src="/about.png" alt="" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title text-primary">
                  Virtual Account & Payment Gateway for BINUS Group
                </h4>
                <p className="card-text">
                  Service(s) to support all payment activities at Bina Nusantara
                  Group.
                </p>
                <button className="btn btn-lg btn-outline-primary">
                  <a
                    href="http://www.binus.edu"
                    target="_blank"
                    className=" hover-icon"
                  >
                    Visit <i className="fa-regular fa-share-from-square"></i>
                  </a>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
