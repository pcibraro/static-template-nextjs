import * as React from "react";
import styles from "layouts/about.module.css";
import { AboutProps } from "types";
import { Header } from "components/header";

export function AboutLayout({ site }: AboutProps) {
  return (
    <>
       <main role="document">
        <Header name={site.name} headline={site.headline} />
        
        <img className={styles.article} src="/img/perfil-grande.jpg"/><br></br>
        <article className={styles.article}>
        Pablo is an internationally recognized expert and entrepreneur with more than 22 years of experience in designing and implementing large distributed systems with Microsoft technologies and a Connected System MVP.
        For the last few years Pablo has helped numerous Microsoft teams develop tools and frameworks for building service-oriented and web applications with .NET.
        Pablo now focuses on technologies that enable developers to build large scale systems and web applications on the cloud, such as HTML5, Node.js, ASP.NET, Windows Azure and Amazon AWS. 
        </article>
      </main>
     </>
);
}
