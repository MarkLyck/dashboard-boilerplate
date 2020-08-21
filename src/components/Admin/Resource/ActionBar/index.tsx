import React from 'react'
import { Button, Popconfirm } from 'antd'
import { Flex } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

const ActionBar = ({ resource, onDelete, selectedRows }) => {
  const { t } = useTranslation()

  return (
    <Flex alignItems="center">
      <Popconfirm
        title={t('warning.are_you_sure_you_want_to_delete_count_items', {
          count: selectedRows.length,
          items: t(`resource.${resource}${selectedRows.length > 1 ? '_plural' : ''}`),
        })}
        onConfirm={onDelete}
        okText={t('action.delete')}
        cancelText={t('action.cancel')}
      >
        <Button
          disabled={!selectedRows.length}
          danger
          type="primary"
          icon={<FontAwesomeIcon icon={['far', 'trash']} />}
        >
          Delete
        </Button>
      </Popconfirm>
    </Flex>
  )
}

export default ActionBar
