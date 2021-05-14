import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CNDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RRNEN264LL"></script>
        
        <script
        dangerouslySetInnerHTML={{
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RRNEN264LL');
        `
    }}/>

        
            </Head>
        <body>
          <script src="dark-mode.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
