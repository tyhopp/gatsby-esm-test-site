function helloSync2() {
  return `Hi, I am sync`
}

async function helloAsync2() {
  return `Hi, I am async`
}

module.exports = {
  helloSync2,
  helloAsync2,
}
