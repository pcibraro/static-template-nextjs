import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { Note, site } from "collected-notes";
import styles from "components/header.module.css";

export function Header({ name, headline, note }: { name: string; headline: string; note?: Note}) {
  
  const domain = process.env.CN_SITE_WWW || "https://thecibrax.com";
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta name="Robots" content="all,index,follow,archive"/>

        {/* HTML Meta Tags */}
        <title>{(note) ? note.title : name}</title>
        <meta
          name="description"
          content={(note) ? note.headline : headline}
        />
        <meta
          name="image"
          content={domain + "/img/perfil-grande.jpg"}
        />
        <meta name="keywords" content="notes, blog, note taking, simplicity, security, oauth, auth0, azuread." />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content={(note) ? note.title : name} />
        <meta name="author" content="Pablo Cibraro"/>
        {note && <meta name="publish_date" property="og:publish_date" content={note.created_at}/>}

        <meta
          itemProp="description"
          content={(note) ? note.headline : headline}
        />
        <meta
          itemProp="image"
          content={domain + "/img/perfil-grande.jpg"}
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={(note) ? domain + "/" + note.path : domain} />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={(note) ? note.title : name} />
        <meta property="og:site_name" content="thecibrax.com" />
        <meta
          property="og:description"
          content={(note) ? note.headline : headline}
        />
        <meta
          property="og:image"
          content={domain + "/img/perfil-apple.jpg"}
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@cibrax"/>
        <meta name="twitter:title" content={(note) ? note.title : name} />
        <meta name="twitter:creator" content="@cibrax"/>
        <meta name="twitter:domain" content="thecibrax.com"/>
        <meta name="twitter:widgets:csp" content="on"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content={(note) ? domain + "/" + note.path : domain} />
        <meta
          name="twitter:description"
          content={(note) ? note.headline : headline}
        />
        <meta
          name="twitter:image"
          content={domain + "/img/perfil-apple.jpg"}
        />
        
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={domain + "/img/perfil-apple.jpg"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={domain + "/img/perfil-icon-32x32.jpg"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={domain + "/img/perfil-icon-16x16.jpg"}
        />
        <link rel="canonical" href={(note) ? domain + "/" + note.path : domain}></link>
        <link rel="amphtml" href={(note) ? domain + "/" + note.path : domain}></link>
        <link rel="preload" href={(note) ? domain + "/img/perfil-apple.jpg" : domain} as="image"></link>
        <link href={domain + "/img/perfil-apple.jpg"} rel="image_src"></link>
        <meta name="twitter:image:src" content={domain + "/img/perfil-apple.jpg"}/>
        
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
