import React, { useState } from 'react'
import { Button, Popover, Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import FilterForm from './FilterForm'

const Filter = ({ onSubmit, columns }) => {
  const [filterVisible, setFilterVisible] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <Popover
        placement="bottomRight"
        content={<FilterForm onSubmit={onSubmit} columns={columns} />}
        title="Filter"
        trigger="click"
        visible={filterVisible}
        onVisibleChange={(visible) => setFilterVisible(visible)}
      >
        <Button icon={<FontAwesomeIcon icon={['far', 'filter']} />}>{t('action.filter').cap()}</Button>
      </Popover>
    </>
  )
}

export default Filter
