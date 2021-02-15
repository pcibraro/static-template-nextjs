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
          content="https://media-exp1.licdn.com/dms/image/C5603AQFX519Sis-lNg/profile-displayphoto-shrink_800_800/0/1591966908817?e=1619049600&v=beta&t=ErZf3a2q5pNZON3R4P6DqEmDGIh848jSD0JWbZjMKts"
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
          content="https://media-exp1.licdn.com/dms/image/C5603AQFX519Sis-lNg/profile-displayphoto-shrink_800_800/0/1591966908817?e=1619049600&v=beta&t=ErZf3a2q5pNZON3R4P6DqEmDGIh848jSD0JWbZjMKts"
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
          content="https://media-exp1.licdn.com/dms/image/C5603AQFX519Sis-lNg/profile-displayphoto-shrink_800_800/0/1591966908817?e=1619049600&v=beta&t=ErZf3a2q5pNZON3R4P6DqEmDGIh848jSD0JWbZjMKts"
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
          content="https://media-exp1.licdn.com/dms/image/C5603AQFX519Sis-lNg/profile-displayphoto-shrink_800_800/0/1591966908817?e=1619049600&v=beta&t=ErZf3a2q5pNZON3R4P6DqEmDGIh848jSD0JWbZjMKts"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://media-exp1.licdn.com/dms/image/C5603AQFX519Sis-lNg/profile-displayphoto-shrink_800_800/0/1591966908817?e=1619049600&v=beta&t=ErZf3a2q5pNZON3R4P6DqEmDGIh848jSD0JWbZjMKts"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://media-exp1.licdn.com/dms/image/C5603AQFX519Sis-lNg/profile-displayphoto-shrink_800_800/0/1591966908817?e=1619049600&v=beta&t=ErZf3a2q5pNZON3R4P6DqEmDGIh848jSD0JWbZjMKts"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://media-exp1.licdn.com/dms/image/C5603AQFX519Sis-lNg/profile-displayphoto-shrink_800_800/0/1591966908817?e=1619049600&v=beta&t=ErZf3a2q5pNZON3R4P6DqEmDGIh848jSD0JWbZjMKts"
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
