import React from 'react'

const defaultFilter: any = {
  dateRange: {
    query: 'today',
  },
}

export const FilterContext = React.createContext(defaultFilter)

export class FilterProvider extends React.Component {
  state = { filter: defaultFilter }

  render() {
    return (
      <FilterContext.Provider
        value={{
          filter: this.state.filter,
          setFilter: (filter: any) => this.setState({ filter }),
        }}
      >
        {this.props.children}
      </FilterContext.Provider>
    )
  }
}

export default FilterContext
