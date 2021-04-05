import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="color-scheme" content="light dark" />
          <meta name="author" content="Josue Sanchez" />
          <meta name="keywords" content="Image, create, generate, resize, placeholder, fake image, jpeg, png, mockups, free image service, generator, creator, img, desing, development, custom image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument