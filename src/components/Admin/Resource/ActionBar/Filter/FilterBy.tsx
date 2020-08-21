import React from 'react'
import { Form, Select } from 'antd'
import { useTranslation } from 'react-i18next'
import { underscoreCaseToWord } from '~/common/utils/toWord'
const { Option } = Select

const FilterBy = ({ field, columns, onChange }) => {
  const { t } = useTranslation()

  const filterByOptions = columns.map((column) => {
    const name = typeof column === 'string' ? column : column.name
    return (
      <Option key={name} value={name}>
        {underscoreCaseToWord(name)}
      </Option>
    )
  })

  return (
    <Form.Item
      {...field}
      label={t('action.filter_by').cap()}
      name={[field.name, 'filterBy']}
      fieldKey={[field.fieldKey, 'filterBy']}
      rules={[
        {
          required: true,
          message: t('message.validation.missing_item', { item: t('action.filter_by') }),
        },
      ]}
    >
      <Select onChange={onChange} placeholder={t('action.filter_by').cap()} style={{ width: 120 }}>
        {filterByOptions}
      </Select>
    </Form.Item>
  )
}

export default FilterBy
