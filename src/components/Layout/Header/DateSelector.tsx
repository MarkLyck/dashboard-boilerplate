import React, { useContext, useState, useEffect, useRef } from 'react'
import { Button } from 'antd'
import { DateRangePicker } from 'react-date-range'
import {
  format,
  subMonths,
  startOfDay,
  startOfMonth,
  endOfMonth,
  subDays,
  startOfYesterday,
  endOfYesterday,
  startOfWeek,
} from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled'
import theme from '~/common/theme'

import { filterContext } from '~/common/contexts'

const StyledDateRangePicker = styled(DateRangePicker)`
  position: absolute;
  top: 72px;
  right: 0;
  border: 1px solid ${(props: any) => props.theme.colors.border};
  box-shadow: 0 4px 14px 0 rgba(111, 120, 156, 0.08);
  border-radius: 4px;
  background: ${(props: any) => props.theme.colors.primary.background};

  .rdrDefinedRangesWrapper {
    width: 140px;
  }

  .rdrStaticRangeLabel {
    color: ${(props: any) => (props.selected ? props.theme.colors.text.main : props.theme.colors.text.inactive)};
    font-weight: ${(props: any) => (props.selected ? '700' : '500')};
  }
`

const DateRangePickerContainer = styled.div``
const ChevronIcon = styled(FontAwesomeIcon)`
  && {
    margin-right: 4px;
    margin-left: 4px;
  }
`

const customLabelsDateRange = [
  {
    label: 'Today',
    range: () => ({
      startDate: startOfDay(new Date()),
      endDate: new Date(),
      name: 'Today',
    }),
    isSelected() {
      return true
    },
  },
  {
    label: 'Yesterday',
    range: () => ({
      startDate: startOfYesterday(),
      endDate: endOfYesterday(),
      name: 'Yesterday',
    }),
    isSelected() {
      return true
    },
  },
  {
    label: 'This week',
    range: () => ({
      startDate: startOfWeek(new Date(), { weekStartsOn: 1 }), //(Monday at 00:00 until midnight today)
      endDate: new Date(),
      name: 'This Week',
    }),
    isSelected() {
      return true
    },
  },
  {
    label: 'Last 7 days',
    range: () => ({
      startDate: startOfDay(subDays(new Date(), 7)),
      endDate: new Date(),
      name: 'Last 7 days',
    }),
    isSelected() {
      return true
    },
  },
  {
    label: 'This month',
    range: () => ({
      startDate: startOfMonth(new Date()), //(00:00 on the 1st of the current month until now)
      endDate: new Date(),
      name: 'This month',
    }),
    isSelected() {
      return true
    },
  },
  {
    label: 'Last 30 days',
    range: () => ({
      startDate: startOfDay(subDays(new Date(), 30)),
      endDate: new Date(),
      name: 'Last 30 days',
    }),
    isSelected() {
      return true
    },
  },
  {
    label: 'Last month',
    range: () => ({
      startDate: startOfMonth(subMonths(new Date(), 1)), //(1st of the last month until midnight on last day of the last month)
      endDate: endOfMonth(subMonths(new Date(), 1)),
      name: 'Last month',
    }),
    isSelected() {
      return true
    },
  },
]
const formatDate = (date: Date) => format(date, 'yyyy-MM-dd')

const DateSelector = () => {
  const { filter, setFilter } = useContext(filterContext)
  const [dateRangePickerVisible, setDateRangePickerVisible] = useState(false)
  const [label, setLabel] = useState({
    name: 'Today',
    startDate: null,
    endDate: null,
  })
  const dateRangePickerNode = useRef(null)

  const handleClick = (e: any) => {
    // if user clicked inside the dateRangerPicker don't do anything
    if (dateRangePickerVisible && dateRangePickerNode.current && dateRangePickerNode.current.contains(e.target)) return
    // if user clicked outside the dateRangerPicker, hide the modal
    setDateRangePickerVisible(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false)
    return () => document.removeEventListener('mousedown', handleClick, false)
  })

  const handleChange = (ranges) => {
    setFilter({
      ...filter,
      dateRange: {
        ...filter.dateRange,
        query: [formatDate(ranges.dates.startDate), formatDate(ranges.dates.endDate)],
        startDate: ranges.dates.startDate,
        endDate: ranges.dates.endDate,
        name: ranges.dates.name,
      },
    })

    setLabel({
      name: ranges.dates.name,
      startDate: ranges.dates.name ? null : `${formatDate(ranges.dates.startDate)}`,
      endDate: ranges.dates.name ? null : `${formatDate(ranges.dates.endDate)}`,
    })
  }

  const dateRanges = [
    {
      startDate: filter.dateRange.startDate || new Date(),
      endDate: filter.dateRange.endDate || new Date(),
      color: theme.colors.action.active,
      key: 'dates',
    },
  ]

  return (
    <>
      <Button
        onClick={() => setDateRangePickerVisible(!dateRangePickerVisible)}
        icon={<FontAwesomeIcon icon={['far', 'calendar']} />}
      >
        {label.name ? (
          <>{label.name}</>
        ) : (
          <>
            {label.startDate} <ChevronIcon icon={'chevron-right'} /> {label.endDate}
          </>
        )}
      </Button>
      {dateRangePickerVisible && (
        <DateRangePickerContainer ref={dateRangePickerNode}>
          <StyledDateRangePicker
            onChange={handleChange}
            ranges={dateRanges}
            inputRanges={[]}
            staticRanges={customLabelsDateRange}
          />
        </DateRangePickerContainer>
      )}
    </>
  )
}

export default DateSelector
