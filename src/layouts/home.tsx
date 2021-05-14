import * as React from "react";
import { HomePageProps } from "types";
import { Header } from "components/header";
import styles from "layouts/home.module.css";
import { NoteItem } from "components/note-item";
import Head from "next/head";

import Link from "next/link";

export function HomeLayout({ site, notes }: HomePageProps) {
  return (
    <>
      <main role="document">
      <Header name={site.name} headline={site.headline} />

      <nav className={styles.nav}>
        <Link href="/about">
          <a>
            <span>About</span>
          </a>
        </Link>
        <Link href="https://twitter.com/cibrax">
          <a>
            <span>Twitter</span>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/cibrax/">
          <a>
            <span>Linkedin</span>
          </a>
        </Link>
        <Link href="https://github.com/pcibraro">
          <a>
            <span>Github</span>
          </a>
        </Link>
      </nav>
      
      <section className={styles.section}>
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </section>
      </main>
    </>
  );
}
