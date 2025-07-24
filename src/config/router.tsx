import { Calendar, Weather, Home } from '../pages'

export const router = [
  {
    index: true,
    Component: Home
  },
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
