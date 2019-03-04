const mathUtils = require('./mathUtils')

console.log(`
  ${mathUtils.accAdd(1,1.2)},
  ${mathUtils.accDiv(1,1.2)},
  ${mathUtils.accMulPlus(1,1.2)},
  ${mathUtils.accAddPlus(1,1.2)},
  ${mathUtils.toFixed(1, 4)},
  ${mathUtils.toThousands(1000, true)},
`)
