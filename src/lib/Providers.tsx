import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { ConfigProvider } from 'antd'
import { useTranslation } from 'react-i18next'
import { FilterProvider } from '~/common/contexts/FilterContext'
import { ThemeContextProvider } from '~/common/contexts/ThemeContext'

import theme from '~/lib/theme'
import '~/common/prototypes/capitalize'

// antd internationalization
import enUS from '~/lib/locale/antd/en_US'
import frFR from '~/lib/locale/antd/fr_FR'

// creates a "superProvider" to avoid "WrapperHell"
const composeWrappers = (wrappers: React.FunctionComponent[]): React.FunctionComponent =>
  wrappers.reduce(
    (Acc, Current): React.FunctionComponent => (props) => (
      <Current>
        <Acc {...props} />
      </Current>
    )
  )

const Providers = ({ children }) => {
  const { i18n } = useTranslation()
  const antDLocale = i18n.language === 'en' ? enUS : frFR

  const SuperProvider = composeWrappers([
    ({ children }) => <ThemeContextProvider>{children}</ThemeContextProvider>,
    ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    ({ children }) => <ConfigProvider locale={antDLocale}>{children}</ConfigProvider>,
    ({ children }) => <FilterProvider>{children}</FilterProvider>,
  ])

  return <SuperProvider>{children}</SuperProvider>
}

export default Providers
