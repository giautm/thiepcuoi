import Document, { Head, Main, NextScript } from 'next/document'
import { GA_ID } from '../lib/metrics'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' href='/_next/static/style.css'/>
        </Head>
        <body>
          <Main />
          <NextScript/>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `
            }}
          />
        </body>
      </html>
    )
  }
}