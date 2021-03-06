import type { AppProps } from 'next/app'
import GlobalStyles from '~/common//GlobalStyles'
import Layout from '~/components/Layout'
import 'antd/dist/antd.less'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import '~/lib/iconLibrary'
import '~/lib/locale'
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
