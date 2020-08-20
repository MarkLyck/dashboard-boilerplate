import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Map, { MapType } from './Map'
import { mapDataMock } from 'test/mocks/map'

export default {
  title: 'components/dashboard/map',
  component: Map,
}

const genColorMap = () => 'red'

const Template: Story<MapType> = (args) => <Map {...args} />

export const MapStory = Template.bind({})

MapStory.args = {
  data: mapDataMock,
  isLoading: false,
  colorMap: genColorMap,
}

// export const map = (args) => <Map {...args} />

// map.arguments
