const TimeCalc = require('./time-calculator')

test('initializes right', () => {
  const hours = 2
  const minutes = 40
  const calc = new TimeCalc({ hours, minutes })
  expect(calc.hours).toEqual(hours)
  expect(calc.minutes).toEqual(minutes)
})

test('2:40 plus 2:40 is 5:20', () => {
  const hours = 2
  const minutes = 40
  const calc = new TimeCalc({ hours, minutes })
  calc.add({ hours, minutes })
  expect(calc.hours).toEqual(5)
  expect(calc.minutes).toEqual(20)
})
