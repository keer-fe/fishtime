import Calendar from '../pages/calendar/index'
import Weather from '../pages/weather/index'

export const router = [
  {
    path: 'calendar',
    Component: Calendar
  },
  {
    path: 'weather',
    Component: Weather
  }
]

export const MENU_LIST = [
  {
    label: '日历',
    key: '/calendar'
  },
  {
    label: '天气',
    key: '/weather'
  }
]
