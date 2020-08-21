import React from 'react'
import ActionBar from './index'

export default {
  title: 'components/admin/resource/actionBar',
  component: ActionBar,
}

export const actionBar = (args: any) => <ActionBar {...args} />

actionBar.args = {
  resource: 'site',
  selectedRows: [1, 2],
  onDelete: () => {},
}
