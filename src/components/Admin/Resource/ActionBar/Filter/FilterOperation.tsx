import React from 'react'
import { Form, Select } from 'antd'
import { useTranslation } from 'react-i18next'
const { Option } = Select

const FilterOperation = ({ field, onChange }) => {
  const { t } = useTranslation()

  return (
    <Form.Item
      {...field}
      label={t('action.filter_operation').cap()}
      name={[field.name, 'operation']}
      fieldKey={[field.fieldKey, 'operation']}
      rules={[
        {
          required: true,
          message: t('message.validation.missing_item', { item: t('action.filter_operation') }),
        },
      ]}
    >
      <Select onChange={onChange} placeholder={t('action.filter_operation').cap()} style={{ width: 120 }}>
        <Option key="equals" value="equals">
          {t('common.equals').cap()}
        </Option>
        <Option key="contains" value="contains">
          {t('common.contains').cap()}
        </Option>
      </Select>
    </Form.Item>
  )
}

export default FilterOperation
