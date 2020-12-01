import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/layout/Header";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="text-base">
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
