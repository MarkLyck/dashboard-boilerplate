import React, { useState } from 'react'
import { Select, Divider } from 'antd'
import { Flex } from 'rebass'
import styled from 'styled'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const { Option } = Select

const StyledMultiSelect = styled(Select)`
  .ant-select-selector {
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`

// TODO replace with remote data.
const mockData = [
  { value: 1, label: 'test' },
  { value: 2, label: 'site' },
  { value: 3, label: 'company' },
]

const Search = () => {
  const [resource, setResource] = useState('site')
  const [data, setData] = useState(mockData)
  const [value, setValue] = useState()
  const { t } = useTranslation()

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
      {/* select resource type for searching */}
      <Select defaultValue={t('common.site_plural')} style={{ width: 120 }} onChange={(value) => setResource(value)}>
        <Option value="site">{t('common.site_plural')}</Option>
        <Option value="company">{t('common.company_plural')}</Option>
      </Select>
      <Divider type="vertical" />
      {/* select sites or companies */}
      <StyledMultiSelect
        showSearch
        mode="multiple"
        value={value}
        style={{ width: 200 }}
        placeholder={`${t('common.search')} ${t(`common.${resource}_plural`)}`}
        onChange={handleSelect}
        onSearch={handleSearch}
        notFoundContent={data.length === 0 ? undefined : null}
        filterOption
        optionFilterProp="label"
        suffixIcon={<FontAwesomeIcon icon={['far', 'calendar']} />}
      >
        {options}
      </StyledMultiSelect>
    </Flex>
  )
}

export default Search
