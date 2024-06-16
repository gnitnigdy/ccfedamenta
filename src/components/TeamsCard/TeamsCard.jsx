"use client";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./TeamsCard.module.css";

function TeamsCard({ item, itemIndex }) {
  useEffect(() => {
    Aos.init({
      // konfigurasi AOS
      duration: 1000,
    });
  }, []);
  let jobTitle = [
    "Chief Executive Officer",
    "Chief Marketing Officer",
    "Chief Product Officer",
    "Chief Technology Officer",
    "Chief Financial Officer",
    "Chief Operation Officer",
  ];

  return (
    <div className="col-lg-6" data-aos="fade-down" data-aos-delay="200">
      <div className={`${styles.teamMember} d-flex align-items-start`}>
        <div className={styles.pic}>
          <Image
            src={item.picture.large}
            priority
            alt="thumbnail-actress"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            width={200}
            height={200}
            className="img-fluid"
          />
        </div>
        <div className={styles.memberInfo}>
          <h4>{`${item.name.first} ${item.name.last}`}</h4>
          <span>{jobTitle[itemIndex]}</span>
          <p>{`${item.email}`}</p>
          <div className={styles.social}>
            <Link href={`#`}>
              <i className="bi bi-twitter-x"></i>
            </Link>
            <Link href={`#`}>
              <i className="bi bi-facebook"></i>
            </Link>
            <Link href={`#`}>
              <i className="bi bi-instagram"></i>
            </Link>
            <Link href={`#`}>
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link href={`#`}>
              <i className="bi bi-tiktok"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsCard;
