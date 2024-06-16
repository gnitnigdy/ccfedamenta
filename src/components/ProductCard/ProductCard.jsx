import Link from "next/link";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import LinkButton from "../LinkButton/LinkButton";
function ProductCard({ item }) {
  const { title, slug, thumbnail, pricetag } = item.fields;
  console.log(`ini dari product card`);
  console.log(thumbnail.fields.file);
  let USDollar = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return (
    <div className="col-md-4 p-3">
      <div className={`card ${styles.cardDamenta}`}>
        <div className="d-flex justify-content-center">
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            alt="thumbnail-product"
            priority
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            className="card-img-top"
          />
        </div>
        <div className="card-body">
          <h4 className="card-title text-primary">{item.fields.title}</h4>
          <p className="card-text">
            Budget starts from : {`${USDollar.format(pricetag)}`}
          </p>
          <LinkButton href={`/products/${slug}`}>
            <span>Product Details</span>
            <i className="bi bi-telegram"></i>
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
