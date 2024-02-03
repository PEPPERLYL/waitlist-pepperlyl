import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pepperlyl - NFT & Metaverse Marketplace Waitlist",
  description:
    "Unlock endless creativity in the first NFT & Metaverse Marketplace. Join our waitlist for exclusive access to web3 gaming, NFT art, digital art, and more.",
  keywords: [
    "Pepperlyl",
    "NFT Marketplace",
    "Metaverse",
    "Web3",
    "Gaming",
    "Digital Art",
    "NFT Artists",
    "Art Collectors",
    "Game Developers",
  ],
  favicon: "./favicon.ico", // Replace with the actual path to your favicon
  image: "../assets/images/logo.png", // Replace with the actual path to your logo
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <link rel="icon" href={metadata.favicon} />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
