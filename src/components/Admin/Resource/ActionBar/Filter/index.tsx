import React, { useState } from 'react'
import { Button, Popover, Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FilterForm from './FilterForm'

const Filter = ({ onFilter, columns }) => {
  const [filterVisible, setFilterVisible] = useState(false)
  const { t } = useTranslation()

  return (
    <div>
      <Popover
        placement="bottomRight"
        content={<FilterForm onSubmit={console.log} />}
        title="Filter"
        trigger="click"
        visible={filterVisible}
        onVisibleChange={(visible) => setFilterVisible(visible)}
      >
        <Button icon={<FontAwesomeIcon icon={['far', 'filter']} />}>{t('action.filter').cap()}</Button>
      </Popover>
    </div>
  )
}

export default Filter
