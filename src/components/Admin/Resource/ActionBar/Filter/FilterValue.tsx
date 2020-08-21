import React from 'react'
import { Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'

const FilterValue = ({ field }) => {
  const { t } = useTranslation()

  return (
    <Form.Item
      {...field}
      name={[field.name, 'value']}
      fieldKey={[field.fieldKey, 'value']}
      rules={[
        {
          required: true,
          message: t('message.validation.missing_item', {
            item: t('common.value'),
          }),
        },
      ]}
    >
      <Input />
    </Form.Item>
  )
}

export default FilterValue
