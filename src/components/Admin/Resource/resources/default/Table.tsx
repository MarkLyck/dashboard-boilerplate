import React, { useState } from 'react'
import styled from 'styled'
import { Table, Space } from 'antd'
import generateColumns from '~/components/Admin/Resource/utils/generateColumns'
import ActionBar from '~/components/Admin/Resource/ActionBar'

import data from '../Site/mock'

const StyledSpace = styled(Space)`
  width: 100%;
`

const TableComponent = ({ resource, rowKey = 'id' }) => {
  const [selectedRows, setSelectedRows] = useState([])

  const onCreate = () => console.log('onCreate')
  const onEdit = () => console.log('onEdit')
  const onDelete = () => console.log('delete')

  const columns = generateColumns(resource.fields, onEdit)

  const handleTableChange = (pagination, filters, sorter) => {
    console.log('handleTableChange -> sorter', sorter)
    console.log('handleTableChange -> filters', filters)
    console.log('handleTableChange -> pagination', pagination)
    // re-fetch data.
  }

  return (
    <StyledSpace direction="vertical">
      <ActionBar resource={resource} onCreate={onCreate} onDelete={onDelete} selectedRows={selectedRows} />
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        onChange={handleTableChange}
        rowKey={rowKey}
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys) => setSelectedRows(selectedRowKeys),
        }}
      />
    </StyledSpace>
  )
}

export default TableComponent
