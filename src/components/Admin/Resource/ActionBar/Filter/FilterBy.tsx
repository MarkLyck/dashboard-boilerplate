import React from 'react'
import { Form, Select } from 'antd'
import { useTranslation } from 'react-i18next'
import { underscoreCaseToWord } from '~/common/utils/toWord'
const { Option } = Select

const FilterBy = ({ field, resourceFields = [], onChange }) => {
  const { t } = useTranslation()

  const filterByOptions = resourceFields.map((resourceField) => {
    const fieldName = typeof resourceField === 'string' ? resourceField : resourceField.name

    return (
      <Option key={fieldName} value={fieldName}>
        {underscoreCaseToWord(fieldName)}
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
