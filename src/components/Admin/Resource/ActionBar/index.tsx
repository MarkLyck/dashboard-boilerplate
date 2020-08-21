import React from 'react'
import { Button } from 'antd'
import { Flex } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ActionBar = ({ onDelete }) => (
  <Flex alignItems="center">
    <Button onClick={onDelete} icon={<FontAwesomeIcon icon={['far', 'trash']} />}>
      Delete
    </Button>
  </Flex>
)

export default ActionBar
