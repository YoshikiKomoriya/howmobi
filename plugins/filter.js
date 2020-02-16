import Vue from 'vue'

Vue.filter('omitted', function(value, length) {
  const count = length ? parseInt(length, 10) : 100

  if (value.length <= count) {
    return value
  }

  return value.slice(0, count) + '...'
})
