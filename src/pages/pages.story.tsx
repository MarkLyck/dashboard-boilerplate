import React from 'react'
import Home from './index'
import Layout from '~/components/Layout'

export default {
  title: 'pages/home',
  component: Home,
}

export const component = () => (
  <Layout>
    <Home />
  </Layout>
)
