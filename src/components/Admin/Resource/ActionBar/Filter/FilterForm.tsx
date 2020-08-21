import React, { useState } from 'react'
import { Form, Button, Space } from 'antd'
import styled from 'styled'
import { Flex } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

// Filter components
import FilterBy from './FilterBy'
import FilterOperation from './FilterOperation'
import FilterValue from './FilterValue'

const Container = styled.div`
  min-width: 470px;
`

const StyledSpace = styled(Space)`
  display: flex;
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

const ApplyFormItem = styled(Form.Item)`
  margin-bottom: 0;
  .ant-form-item-control-input-content {
    display: flex;
    justify-content: flex-end;
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
    <Container>
      <Form name="dynamic_filter_form" onFinish={onSubmit} autoComplete="off" layout="vertical">
        <Form.List name="filters">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, i) => (
                <StyledSpace key={field.key} align="start" size="small">
                  <FilterBy
                    field={field}
                    resourceFields={resourceFields}
                    onChange={(value: string) => handleFilterByChange(value, i)}
                  />
                  {filters[i] && (
                    <FilterOperation
                      field={field}
                      onChange={(value: string) => handleFilterOperationChange(value, i)}
                    />
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
                </StyledSpace>
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

        <ApplyFormItem>
          <Button type="primary" htmlType="submit">
            <FontAwesomeIcon icon={['far', 'filter']} /> {t('action.apply_filter').cap()}
          </Button>
        </ApplyFormItem>
      </Form>
    </Container>
  )
}

export default FilterForm
