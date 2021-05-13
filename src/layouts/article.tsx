import * as React from "react";
import { parse } from "url";
import clsx from "clsx";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { formatDistanceToNow } from "date-fns";
import { ArticlePageProps } from "types";
import { Header } from "components/header";
import Head from "next/head";
import styles from "layouts/article.module.css";
import { FaSpinner } from "react-icons/fa";

export function ArticleLayout({ note, site, body, links }: ArticlePageProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <div className={styles.spinner}>
        <FaSpinner className="animate-spin-slow" size={64} />
      </div>
    );
  }

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
        <meta itemProp="name" content={note.title} />
        <meta
          itemProp="description"
          content={note.title}
        />
        <meta
          itemProp="image"
          content="/img/perfil-grande.jpg"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://thecibrax.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={note.title} />
        <meta
          property="og:description"
          content={note.title}
        />
        <meta
          property="og:image"
          content="/img/perfil-apple.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={note.title} />
        <meta
          name="twitter:description"
          content={note.title}
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
      <Header name={site.name} headline={site.headline} />

      <article
        className={clsx(styles.article, "prose dark:prose-dark")}
        dangerouslySetInnerHTML={{ __html: body }}
      />

      <footer className={styles.footer}>
        <time dateTime={note.created_at}>
          {formatDistanceToNow(new Date(note.created_at), { addSuffix: true })}
        </time>

        <p>
          <NextLink href="/">
            <a>{site.name}</a>
          </NextLink>
        </p>
      </footer>

      {links.length > 0 ? (
        <aside className={styles.aside}>
          <p>Links on this note↗</p>

          <ul>
            {links.map((link) => {
              const isInternal = link.kind === "internal";
              return (
                <li className={clsx({ [styles.internal]: isInternal })}>
                  <a href={link.url} title={link.title}>
                    {link.host}
                  </a>
                  <span>{parse(link.url).pathname}</span>
                </li>
              );
            })}
          </ul>
        </aside>
      ) : null}
      </main>
    </>
  );
}
