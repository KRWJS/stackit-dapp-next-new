import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Automate your crypto investments with non custodial dollar cost averaging."
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Automate your crypto investments with non custodial dollar cost averaging."
          />
          <meta property="og:image" content="https://i.ibb.co/2h5Xdmz/og.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="stackit.finance" />
          <meta
            name="twitter:description"
            content="Automate your crypto investments with non custodial dollar cost averaging."
          />
          <meta name="twitter:image" content="https://i.ibb.co/2h5Xdmz/og.png" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
