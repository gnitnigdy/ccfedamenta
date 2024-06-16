import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/Bootstrap5/BootstrapClient";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import "@/app/global.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gundaling Print - Company Profile",
  description: "Compro Gundaling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>

        <BootstrapClient />
      </body>
    </html>
  );
}
