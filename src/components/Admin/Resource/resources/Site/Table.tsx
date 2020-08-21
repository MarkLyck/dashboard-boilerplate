import React from 'react'
import { Table, Space } from 'antd'
import generateColumns from '~/components/Admin/Resource/utils/generateColumns'
import data from './mock'
import ActionBar from '~/components/Admin/Resource/ActionBar'

const TableComponent = () => {
  const onEdit = () => console.log('onEdit')
  const onDelete = () => console.log('delete')

  const columns = generateColumns(
    [
      'id',
      'name',
      'active',
      'company_id',
      'uid',
      'captive_portal_id',
      'address_line_1',
      'address_line_2',
      'province_or_state',
      'city',
      'country',
      'lat',
      'lon',
    ],
    onEdit
  )

  const handleTableChange = (pagination, filters, sorter) => {
    console.log('handleTableChange -> sorter', sorter)
    console.log('handleTableChange -> filters', filters)
    console.log('handleTableChange -> pagination', pagination)
    // re-fetch data.
  }

  return (
    <Space direction="vertical">
      <ActionBar onDelete={onDelete} />
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        onChange={handleTableChange}
        rowKey="id"
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys, _selectedRows) => console.log(`selectedRowKeys: ${selectedRowKeys}`),
        }}
      />
    </Space>
  )
}

export default TableComponent
