
import { parseDate } from '../Timing-Functions/ParseDate'

// Array holding name of the day: Saturday - Sunday - Friday => 0 - 1 - 6
const daysNameArr = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

const DateToDay = (date) => {
  // firstly, check that input is a string or not.
  const dateStruct = parseDate(date)
  let year = dateStruct.year
  let month = dateStruct.month
  let day = dateStruct.day


  if (month < 3) {
    year--
    month += 12
  }

  // divide year into century and the last two digits of the century
  const yearDigits = year % 100
  const century = Math.floor(year / 100)

  const weekDay =
    (day +
      Math.floor((month + 1) * 2.6) +
      yearDigits +
      Math.floor(yearDigits / 4) +
      Math.floor(century / 4) +
      5 * century) %
    7
  return daysNameArr[weekDay] // name of the weekday
}



export { DateToDay }
