## Common methods for compulating numbers

### installation
```
npm i abs-compute
```
### introduction to these functions
``` js
const mathUtils = require('./mathUtils')

console.log(`
  ${mathUtils.accAdd(1,1.2)}, // 加法
  ${mathUtils.accSub(1,1.2)}, // 减法
  ${mathUtils.accSubPlus(1,1.2)}, // 大于两个数加法
  ${mathUtils.accDiv(1,1.2)}, // 除法
  ${mathUtils.accMul(1,1.2)}, // 两个数乘法
  ${mathUtils.accMulPlus(1, 1.2, 3)}, // 大于两个数的乘法
  ${mathUtils.toFixed(1, 4)}, // 设置小数点后保留的位数，默认为4位
`)
