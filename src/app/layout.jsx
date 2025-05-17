import { Inter } from "next/font/google";
import '../styles/globals.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Studio de Dança",
  description: "Studio de dança com diversas modalidades e professores qualificados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
