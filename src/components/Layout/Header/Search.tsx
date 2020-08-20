import React, { useState } from 'react'
import { Select, Divider } from 'antd'
import { Flex } from 'rebass'

const { Option } = Select

const mockData = [
  { value: 1, label: 'test' },
  { value: 2, label: 'site' },
  { value: 3, label: 'company' },
]

const Search = () => {
  const [resource, setResource] = useState('site')
  const [data, setData] = useState(mockData)
  const [value, setValue] = useState()

  const handleSearch = (searchTerm) => {
    // Fetch new data with searchTerm
    setData(mockData.filter((value) => value.label.includes(searchTerm)))
  }

  const handleSelect = (value) => {
    setValue(value)
    // Fetch new data with empty searchTerm
    setData(mockData)
  }

  const options = data.map((d) => (
    <Option key={d.value} value={d.value} label={d.label}>
      {d.label}
    </Option>
  ))

  return (
    <Flex alignItems="center">
      {/* select sites or companies */}
      <Select defaultValue="sites" style={{ width: 120 }} onChange={(value) => setResource(value)}>
        <Option value="site">Sites</Option>
        <Option value="company">Companies</Option>
      </Select>
      <Divider type="vertical" />
      <Select
        showSearch
        mode="multiple"
        value={value}
        style={{ width: 200 }}
        placeholder="search"
        onChange={handleSelect}
        onSearch={handleSearch}
        notFoundContent={data.length === 0 ? undefined : null}
        filterOption
        optionFilterProp="label"
      >
        {options}
      </Select>
    </Flex>
  )
}

export default Search
