const mathUtils = require('./mathUtils')

console.log(`
  ${mathUtils.accAdd(1,1.2)},
  ${mathUtils.accDiv(1,1.2)},
  ${mathUtils.accMulPlus(1,1.2)},
  ${mathUtils.accSubPlus(1,1.2)},
  ${mathUtils.toFixed(1, 4)},
`)
