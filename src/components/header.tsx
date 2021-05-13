import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { Note, site } from "collected-notes";
import styles from "components/header.module.css";

export function Header({ name, headline, note }: { name: string; headline: string; note: Note}) {
  console.log(note);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* HTML Meta Tags */}
        <title>{(note) ? note.title : name}</title>
        <meta
          name="description"
          content={(note) ? note.headline : headline}
        />
        <meta
          name="image"
          content="/img/perfil-grande.jpg"
        />
        <meta name="keywords" content="notes, blog, note taking, simplicity, security, oauth, auth0, azuread." />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Pablo Cibraro" />
        <meta itemProp="name" content={(note) ? note.title : name} />
        
        <meta
          itemProp="description"
          content={(note) ? note.headline : headline}
        />
        <meta
          itemProp="image"
          content="/img/perfil-grande.jpg"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://thecibrax.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={(note) ? note.title : name} />
        <meta
          property="og:description"
          content={(note) ? note.headline : headline}
        />
        <meta
          property="og:image"
          content="/img/perfil-apple.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={(note) ? note.title : name} />
        <meta name="twitter:url" content={(note) ? "https://thecibrax.com/" + note.title : "https://thecibrax.com"} />
        <meta
          name="twitter:description"
          content={(note) ? note.headline : headline}
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
        {note && <link rel="canonical" href={"https://thecibrax.com/" + note.title}></link>}
        {note && <link rel="amphtml" href={"https://thecibrax.com/" + note.title}></link>}
        {note && <link rel="preload" href="/img/perfil-apple.jpg" as="image"></link>}
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            <h1>{name}</h1>
          </a>
        </Link>
        <p>{headline}</p>
      </header>
    </>
  );
}
