import { createGetInitialProps } from '@mantine/next';
const getInitialProps = createGetInitialProps();
import { Html, Head, Main, NextScript } from 'next/document'


export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}