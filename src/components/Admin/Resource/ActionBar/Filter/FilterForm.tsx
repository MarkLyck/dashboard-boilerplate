import React, { useState } from 'react'
import { Form, Button, Space } from 'antd'
import styled from 'styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

// Filter components
import FilterBy from './FilterBy'
import FilterOperation from './FilterOperation'
import FilterValue from './FilterValue'

const FormListContainer = styled(Space)`
  align-items: flex-end;
`

const RemoveButton = styled(Button)`
  margin-bottom: 24px;
  padding-left: 8px;
  padding-right: 8px;
  svg {
    margin-right: 0;
  }
`

const FilterForm = ({ resourceFields, onSubmit }) => {
  const [filters, setFilters] = useState([])
  const { t } = useTranslation()

  const handleFilterByChange = (value: string, index: number) => {
    const newFilters = [...filters]
    newFilters[index] = { filterBy: value }
    setFilters(newFilters)
  }

  const handleFilterOperationChange = (value: string, index: number) => {
    const newFilters = [...filters]
    newFilters[index].filterOperation = value
    setFilters(newFilters)
  }

  const handleRemoveFilter = (index: number) => {
    const newFilters = [...filters]
    newFilters.splice(index, 1)
    setFilters(newFilters)
  }

  return (
    <Form name="dynamic_form_nest_item" onFinish={onSubmit} autoComplete="off" layout="vertical">
      <Form.List name="filters">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, i) => (
              <FormListContainer key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                <FilterBy
                  field={field}
                  resourceFields={resourceFields}
                  onChange={(value: string) => handleFilterByChange(value, i)}
                />
                {filters[i] && (
                  <FilterOperation field={field} onChange={(value: string) => handleFilterOperationChange(value, i)} />
                )}
                {filters[i] && filters[i].filterOperation ? <FilterValue field={field} /> : null}

                <RemoveButton
                  onClick={() => {
                    remove(field.name)
                    handleRemoveFilter(i)
                  }}
                  type="text"
                >
                  <FontAwesomeIcon icon={['fad', 'minus-circle']} />
                </RemoveButton>
              </FormListContainer>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => {
                  add()
                }}
                block
              >
                <FontAwesomeIcon icon={['far', 'plus']} />
                {t('action.add_filter').cap()}
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          <FontAwesomeIcon icon={['far', 'filter']} /> {t('action.apply_filter').cap()}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FilterForm
