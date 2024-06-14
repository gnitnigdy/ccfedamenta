import Link from "next/link";
import Image from "next/image";
import BootstrapClient from "@/components/Bootstrap5/BootstrapClient";
function ProductCard({ item }) {
  const { title, slug, thumbnail, pricetag } = item.fields;
  console.log(thumbnail.fields.file);
  return (
    <div className="col-md-4 p-3">
      <div className="card">
        <div className="d-flex justify-content-center">
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            alt="thumbnail-actress"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            className="card-img-top"
          />
        </div>
        <img src="/about.png" alt="" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title text-primary">{item.fields.title}</h4>
          <p className="card-text">
            Budget starts from : {`Rp. ${pricetag}.00`}
          </p>
          <button className="btn btn-lg btn-outline-primary btn-link">
            {/* <Link href={`/products/${slug}`}>See Details</Link> */}
            See Details
            {/* <a
              href="http://www.binus.edu/admissions"
              target="_blank"
              className=" hover-icon"
            ></a> */}
            {/* Visit <i className="fa-regular fa-share-from-square"></i> */}
          </button>
          <a href="#link" className="btn btn-primary">
            Link Button
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
