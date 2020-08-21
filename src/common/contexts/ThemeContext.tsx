import React from 'react'

export const ThemeContext = React.createContext({ themeType: 'light' })

export class ThemeContextProvider extends React.Component {
  state = { themeType: 'light' }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          themeType: this.state.themeType,
          // @ts-ignore
          setThemeType: (themeType: string) => this.setState({ themeType }),
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext
