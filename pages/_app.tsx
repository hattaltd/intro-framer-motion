// START: import-components-packages-globalStyle
import { Layout } from '@/components';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/config/globalStyle';

// START: app
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
