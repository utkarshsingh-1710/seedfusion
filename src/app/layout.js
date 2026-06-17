import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "SeedFusion Agri Grow LLP — Quality Seeds, Trusted Partnerships",
  description:
    "SeedFusion Agri Grow LLP is a Pune-based agricultural company and the parent company behind the Raghvi Seeds brand — offering certified Paddy, Wheat, Rice, Mustard, and Cereal seeds.",
  keywords:
    "SeedFusion Agri Grow, Raghvi Seeds, agricultural seeds, paddy seeds, wheat seeds, rice seeds, mustard seeds, Pune, Maharashtra",
  openGraph: {
    title: "SeedFusion Agri Grow LLP — Raghvi Seeds",
    description: "Quality Seeds under the Raghvi Seeds brand. Trusted Partnerships. Sustainable Agriculture.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
