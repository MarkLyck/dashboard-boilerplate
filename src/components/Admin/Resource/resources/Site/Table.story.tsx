import React from 'react'
import Table from './Table'

export default {
  title: 'components/admin/site/table',
  component: Table,
}

export const table = (props) => (
  <>
    <Table {...props} />
  </>
)
