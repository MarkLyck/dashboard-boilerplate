import React from 'react'
import { underscoreCaseToWord } from '~/common/utils/toWord'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const generateColumns = (columns: any[], onEdit: () => void) => {
  const antColumns: any[] = columns.map((column) => {
    const columnName = typeof column === 'string' ? column : column.name

    return {
      title: underscoreCaseToWord(columnName),
      dataIndex: columnName,
      key: columnName,
      sorter: true,
    }
  })

  antColumns.push({
    title: 'Action',
    key: 'action',
    render: (_text, _resource) => (
      <a onClick={onEdit}>
        <FontAwesomeIcon icon={['far', 'edit']} />
      </a>
    ),
  })

  return antColumns
}

export default generateColumns
