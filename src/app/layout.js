import "./globals.scss";

import Header from "@/components/header/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="webp">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css?_v=20240719225904"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js?_v=20240719225904"></script>
      </head>
      <body>
        <div className="wrapper">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
