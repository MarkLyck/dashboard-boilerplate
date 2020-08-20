import {
  subMonths,
  startOfDay,
  startOfMonth,
  endOfMonth,
  subDays,
  startOfYesterday,
  endOfYesterday,
  startOfWeek,
} from 'date-fns'

const customLabelsDateRange = (t) => [
  {
    label: t('time.today'),
    range: () => ({
      startDate: startOfDay(new Date()),
      endDate: new Date(),
      name: t('time.today'),
    }),
    isSelected() {
      return true
    },
  },
  {
    label: t('time.yesterday'),
    range: () => ({
      startDate: startOfYesterday(),
      endDate: endOfYesterday(),
      name: t('time.yesterday'),
    }),
    isSelected() {
      return true
    },
  },
  {
    label: t('time.this_week'),
    range: () => ({
      startDate: startOfWeek(new Date(), { weekStartsOn: 1 }), //(Monday at 00:00 until midnight today)
      endDate: new Date(),
      name: t('time.this_week'),
    }),
    isSelected() {
      return true
    },
  },
  {
    label: t('time.last_7_days'),
    range: () => ({
      startDate: startOfDay(subDays(new Date(), 7)),
      endDate: new Date(),
      name: t('time.last_7_days'),
    }),
    isSelected() {
      return true
    },
  },
  {
    label: t('time.this_month'),
    range: () => ({
      startDate: startOfMonth(new Date()), //(00:00 on the 1st of the current month until now)
      endDate: new Date(),
      name: t('time.this_month'),
    }),
    isSelected() {
      return true
    },
  },
  {
    label: t('time.last_30_days'),
    range: () => ({
      startDate: startOfDay(subDays(new Date(), 30)),
      endDate: new Date(),
      name: t('time.last_30_days'),
    }),
    isSelected() {
      return true
    },
  },
  {
    label: t('time.last_month'),
    range: () => ({
      startDate: startOfMonth(subMonths(new Date(), 1)), //(1st of the last month until midnight on last day of the last month)
      endDate: endOfMonth(subMonths(new Date(), 1)),
      name: t('time.last_month'),
    }),
    isSelected() {
      return true
    },
  },
]

export default customLabelsDateRange
