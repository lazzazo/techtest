// SVG assets
import CurrencyIcon from './icons/CurrencyIcon';
// MUI Icons
import DefaultIcon from '@mui/icons-material/MoreHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DayNightIcon from '@mui/icons-material/Brightness4';
import NightIcon from '@mui/icons-material/Brightness3';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import DangerousIcon from '@mui/icons-material/Dangerous';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';

export type IconName = keyof typeof ICONS;

export const ICONS  = {
  default: DefaultIcon,
  logo: CurrencyIcon,
  close: CloseIcon,
  menu: MenuIcon,
  settings: SettingsIcon,
  visibilityOn: VisibilityIcon,
  visibilityOff: VisibilityOffIcon,
  dayNight: DayNightIcon,
  night: NightIcon,
  day: LightModeRoundedIcon,
  search: SearchIcon,
  info: InfoIcon,
  home: HomeIcon,
  account: AccountCircle,
  signup: PersonAddIcon,
  login: PersonIcon,
  logout: ExitToAppIcon,
  notifications: NotificationsIcon,
  error: DangerousIcon,
  currencyExchange: LocalAtmRoundedIcon
};
