import React from 'react'
import Resource from './index'

export default {
  title: 'components/admin/resource',
  component: Resource,
}

export const resource = (args: any) => <Resource {...args}>content</Resource>

resource.args = {
  propResource: 'site',
}

resource.argTypes = {
  propResource: {
    control: {
      type: 'select',
      options: [
        'site',
        'company',
        'captive_portal_v3',
        'device_v3',
        'probe',
        'dns_service',
        'service_firewall',
        'wifi_service_v3',
      ],
    },
  },
}
