/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysofWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DaysofWeek): boolean {
  return day === DaysofWeek.Saturday || day === DaysofWeek.Sunday
}