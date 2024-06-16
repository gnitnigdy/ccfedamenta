import styles from "./LinkButton.module.css";
import Link from "next/link";

function LinkButton({ href, children }) {
  return (
    <Link href={href} className={styles.buttonEffect}>
      {children}
    </Link>
  );
}

export default LinkButton;
