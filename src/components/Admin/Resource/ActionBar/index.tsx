import React from 'react'
import { Button, Popconfirm, Space } from 'antd'
import { Flex } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import Filter from './Filter'

const ActionBar = ({ resource, onCreate, onDelete, selectedRows }) => {
  console.log('ActionBar -> resource', resource)
  const { t } = useTranslation()

  return (
    <Flex alignItems="center" justifyContent="flex-end" mb="8px">
      <Space>
        <Filter onSubmit={console.log} resourceFields={resource.fields} />
        <Popconfirm
          title={t('message.warning.are_you_sure_you_want_to_delete_count_items', {
            count: selectedRows.length,
            items: t(`resource.${resource.name}${selectedRows.length > 1 ? '_plural' : ''}`),
          })}
          disabled={!selectedRows.length}
          onConfirm={onDelete}
          okText={t('action.delete')}
          cancelText={t('action.cancel')}
          okButtonProps={{ danger: true }}
          placement="bottomRight"
        >
          <Button
            disabled={!selectedRows.length}
            danger
            type="primary"
            icon={<FontAwesomeIcon icon={['far', 'trash']} />}
          >
            {t('action.delete').cap()}
          </Button>
        </Popconfirm>
        <Button onClick={onCreate} icon={<FontAwesomeIcon icon={['far', 'plus']} />}>
          {t('action.create').cap()}
        </Button>
      </Space>
    </Flex>
  )
}

export default ActionBar
