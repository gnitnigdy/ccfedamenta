"use client";
import Link from "next/link";
import styles from "./SideLink.module.css";
import { usePathname } from "next/navigation";
function SideLink({ linkItem, children }) {
  let pathName = usePathname();
  const pathCustomName = pathName.substring(
    pathName.lastIndexOf("/") + 1,
    pathName.length
  );
  console.log(linkItem);
  console.log(pathCustomName);
  return (
    <Link
      href={`${linkItem}`}
      className={`${styles.productLinkedList} ${
        pathCustomName === linkItem ? styles.productLinkedListActive : ""
      }`}
    >
      {children}
    </Link>
  );
}

export default SideLink;
