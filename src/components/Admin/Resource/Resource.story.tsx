import React from 'react'
import Resource from './index'

export default {
  title: 'components/admin/resource',
  component: Resource,
}

export const resource = (args) => <Resource {...args}>content</Resource>

resource.args = {
  propResource: 'site',
}
