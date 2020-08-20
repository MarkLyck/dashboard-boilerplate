import React, { useContext, useState, useEffect, useRef } from 'react'
import { Button } from 'antd'
import { DateRangePicker } from 'react-date-range'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import styled from 'styled'
import theme from '~/lib/theme'

import { filterContext } from '~/common/contexts'
import customLabelsDateRange from './customLabels'

const StyledDateRangePicker = styled(DateRangePicker)`
  position: absolute;
  z-index: 10;
  top: 72px;
  right: 24px;
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

const formatDate = (date: Date) => format(date, 'yyyy-MM-dd')

const DateSelector = () => {
  const { filter, setFilter } = useContext(filterContext)
  const [dateRangePickerVisible, setDateRangePickerVisible] = useState(false)
  const { t } = useTranslation()
  const [label, setLabel] = useState({
    name: t('time.today'),
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
            staticRanges={customLabelsDateRange(t)}
          />
        </DateRangePickerContainer>
      )}
    </>
  )
}

export default DateSelector
