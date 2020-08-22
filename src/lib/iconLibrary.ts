import { library } from '@fortawesome/fontawesome-svg-core'

// Regular
import {
  faCalendar as faCalendarReg,
  faSignOutAlt as faSignOutAltReg,
  faUser as faUserReg,
  faEdit as faEditReg,
  faTrash as faTrashReg,
  faPlus as faPlusReg,
  faMinus as faMinusReg,
  faFilter as faFilterReg,
  faGlobe as faGlobeReg,
} from '@fortawesome/pro-regular-svg-icons'

// Solid
import { faExpand, faCompress, faChevronRight, faSpinnerThird } from '@fortawesome/pro-solid-svg-icons'

// duoTone
import {
  faMapMarkedAlt as faMapMarkedAltDuo,
  faBuilding as faBuildingDuo,
  faBrowser as faBrowserDuo,
  faRouter as faRouterDuo,
  faMonitorHeartRate as faMonitorHeartRateDuo,
  faServer as faServerDuo,
  faShieldVirus as faShieldVirusDuo,
  faWifi as faWifiDuo,
  faMinusCircle as faMinusCircleDuo,
} from '@fortawesome/pro-duotone-svg-icons'

library.add(
  // Regular
  faCalendarReg,
  faSignOutAltReg,
  faUserReg,
  faEditReg,
  faTrashReg,
  faPlusReg,
  faMinusReg,
  faFilterReg,
  faGlobeReg,
  // Solid
  faExpand,
  faCompress,
  faChevronRight,
  faSpinnerThird,
  // Duo
  faMapMarkedAltDuo,
  faBuildingDuo,
  faBrowserDuo,
  faRouterDuo,
  faMonitorHeartRateDuo,
  faServerDuo,
  faShieldVirusDuo,
  faWifiDuo,
  faMinusCircleDuo
)
