import { library } from '@fortawesome/fontawesome-svg-core'

// Regular
import {
  faCalendar as faCalendarReg,
  faSignOutAlt as faSignOutAltReg,
  faUser as faUserReg,
  faEdit as faEditReg,
  faTrash as faTrashReg,
  faPlus as faPlusReg,
} from '@fortawesome/pro-regular-svg-icons'

// Solid
import { faExpand, faCompress, faChevronRight, faSpinnerThird } from '@fortawesome/pro-solid-svg-icons'

// duoTone
import { faMapPin as faMapPinDuo, faBuilding as faBuildingDuo } from '@fortawesome/pro-duotone-svg-icons'

library.add(
  // Regular
  faCalendarReg,
  faSignOutAltReg,
  faUserReg,
  faEditReg,
  faTrashReg,
  faPlusReg,
  // Solid
  faExpand,
  faCompress,
  faChevronRight,
  faSpinnerThird,
  // Duo
  faMapPinDuo,
  faBuildingDuo
)
