import * as React from "react";
import Head from "next/head";
import { DarkModeToggle } from "components/dark-mode-toggle";
import "styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* HTML Meta Tags */}
        <title>Cibrax's notes</title>
        <meta
          name="description"
          content="This is my personal site about software development, security and other stuffs"
        />
        <meta
          name="image"
          content="/img/perfil-grande.jpg"
        />
        <meta name="keywords" content="notes, blog, note taking, simplicity, security, oauth, auth0, azuread." />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Pablo Cibraro" />
        <meta itemProp="name" content="Cibrax" />
        <meta
          itemProp="description"
          content="My personal site about software development, security and other stuff"
        />
        <meta
          itemProp="image"
          content="/img/perfil-grande.jpg"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://thecibrax.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cibrax's Notes" />
        <meta
          property="og:description"
          content="My personal site about software development, security and other stuff"
        />
        <meta
          property="og:image"
          content="/img/perfil-apple.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cibrax's notes" />
        <meta
          name="twitter:description"
          content="My personal site about software development, security and other stuff"
        />
        <meta
          name="twitter:image"
          content="/img/perfil-apple.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/perfil-apple.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/perfil-icon-32x32.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/perfil-icon-16x16.jpg"
        />
      </Head>

      <main role="document">
        <div className="flex justify-end pt-4 pr-4 -mb-6 md:absolute md:top-0 md:right-0">
          <DarkModeToggle />
        </div>

        <Component {...pageProps} />
      </main>
    </>
  );
}
