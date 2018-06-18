const TimeCalculator = function({ hours = 0, minutes = 0 }) {
  Object.assign(this, { hours, minutes })
  this.add = this.add.bind(this)
}

TimeCalculator.prototype = {
  add({ hours = 0, minutes = 0 }) {
    let leftTime = {}
    this.minutes = ((prevMinutes, newMinutes) => {
      const sum = prevMinutes + newMinutes
      let hours = 0
      if (sum / 60 >= 1) hours = Math.floor(sum / 60)
      Object.assign(leftTime, { hours })
      const mins = sum - hours * 60
      return mins
    })(this.minutes, minutes)
    this.hours += hours + leftTime.hours
    return { hours: this.hours, minutes: this.minutes }
  }
}

if (typeof module !== 'undefined') {
  module.exports = TimeCalculator
}
