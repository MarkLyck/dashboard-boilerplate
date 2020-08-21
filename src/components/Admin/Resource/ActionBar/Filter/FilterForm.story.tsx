import React from 'react'
import FilterForm from './FilterForm'

export default {
  title: 'components/admin/resource/actionBar/filter',
  component: FilterForm,
}

export const filterForm = (args: any) => <FilterForm {...args} />

filterForm.args = {
  onSubmit: console.log,
  resourceFields: [
    'id',
    'name',
    'active',
    'company_id',
    'uid',
    'captive_portal_id',
    // 'address_line_1',
    // 'address_line_2',
    // 'province_or_state',
    // 'city',
    // 'country',
    // 'lat',
    // 'lon',
  ],
}
