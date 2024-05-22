export const Month = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 }

export function getMonthDays(month: Month, year: number): number {
  console.log(month, 'dddddddddddddddddddd')
    console.log(Month.Feb, 'olaaaa')

  const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  if(isLeapYear && month === Month.Feb)
    return 29
  return daysInMonth[month - 1];
}

export function getYearDays(year: number): number {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  if(isLeapYear)
    return 366;
  return 365;

 
 
 
 
 const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
  try{
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  if(isLeapYear && month === Month.Feb)
    return 29;
  return daysInMonth[month - 1];
}catch (err){
console.log('Err', err);
}