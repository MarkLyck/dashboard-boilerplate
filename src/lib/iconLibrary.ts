import { library } from '@fortawesome/fontawesome-svg-core'

// Regular
import {
  faCalendar as faCalendarReg,
  faSignOutAlt as faSignOutAltReg,
  faUser as faUserReg,
} from '@fortawesome/pro-regular-svg-icons'

// Solid
import { faExpand, faCompress, faChevronRight } from '@fortawesome/pro-solid-svg-icons'

// duoTone
// import { faBadgeDollar as faBadgeDollarDuo } from '@fortawesome/pro-duotone-svg-icons'

library.add(
  // Regular
  faCalendarReg,
  faSignOutAltReg,
  faUserReg,
  // Solid
  faExpand,
  faCompress,
  faChevronRight
)
