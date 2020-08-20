import type { AppProps } from 'next/app'
import GlobalStyles from '~/common//GlobalStyles'
import Layout from '~/components/Layout'
import 'antd/dist/antd.css'
import '~/common/utils/iconLibrary'
import Providers from '~/lib/Providers'

const _App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}

export default _App
