import { library } from '@fortawesome/fontawesome-svg-core'

// Regular
import {
  faCalendar as faCalendarReg,
  faSignOutAlt as faSignOutAltReg,
  faUser as faUserReg,
  faEdit as faEditReg,
  faTrash as faTrashReg,
} from '@fortawesome/pro-regular-svg-icons'

// Solid
import { faExpand, faCompress, faChevronRight, faSpinnerThird } from '@fortawesome/pro-solid-svg-icons'

// duoTone
// import { faSpinnerThird as faSpinnerThirdDuo } from '@fortawesome/pro-duotone-svg-icons'

library.add(
  // Regular
  faCalendarReg,
  faSignOutAltReg,
  faUserReg,
  faEditReg,
  faTrashReg,
  // Solid
  faExpand,
  faCompress,
  faChevronRight,
  faSpinnerThird
  // Duo
)
