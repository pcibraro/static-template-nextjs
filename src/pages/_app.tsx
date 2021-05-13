import * as React from "react";
import Head from "next/head";
import { DarkModeToggle } from "components/dark-mode-toggle";
import "styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
        <Component {...pageProps} />
    </>
  );
}
