import type { AppProps } from 'next/app'
import GlobalStyles from '~/common//GlobalStyles'
import Layout from '~/components/Layout'
import 'antd/dist/antd.css'

const _App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default _App
