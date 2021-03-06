const _ = require('lodash')
module.exports = {
  accAdd,
  accSub,
  accMul,
  accDiv,
  toFixed,
  accMulPlus,
  accAddPlus,
  toThousands
};

/**
 * 数字转为千分位格式
 * @param {源数据} num
 * @param {设置为true， 对于没有小数的部分，增加.00} flag
 */
function toThousands(num, flag) {
  let value = (num || 0).toString().trim();
  let result = '';
  let numbers = value.split('.');
  let end = '';
  if (numbers[1]) {
    if (numbers[1].length === 1) {
      end = '.' + numbers[1] + '0';
    } else {
      end = '.' + numbers[1]
    }
  } else {
    if (flag) end = '.00';
  }
  while (numbers[0].length > 3) {
    result = ',' + numbers[0].slice(-3) + result;
    numbers[0] = numbers[0].slice(0, numbers[0].length - 3);
  }
  if (value) { result = numbers[0] + result + end; }
  return result;
}

function toFixed (number, size = 4) {
  try {
    number = Number(number).toFixed(size);
  } catch (error) {
    number = (0).toFixed(size);
  }
  return number;
}

function accAddPlus () {
  return _.reduce(
    Array.prototype.slice.apply(arguments),
    (prev, current) => {
      return accAdd(prev, current);
    },
    0
  );
}

function accMulPlus () {
  return _.reduce(
    Array.prototype.slice.apply(arguments),
    (prev, current) => {
      return accMul(prev, current);
    },
    1
  );
}

function accAdd (arg1, arg2) {
  arg1 = arg1 || ''
  arg2 = arg2 || ''
  var r1, r2, m, c;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    var cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''));
      arg2 = Number(arg2.toString().replace('.', '')) * cm;
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm;
      arg2 = Number(arg2.toString().replace('.', ''));
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''));
    arg2 = Number(arg2.toString().replace('.', ''));
  }
  return (arg1 + arg2) / m;
}

function accSub (arg1, arg2) {

  arg1 = arg1 || ''
  arg2 = arg2 || ''

  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
function accMul (arg1, arg2) {

  arg1 = arg1 || ''
  arg2 = arg2 || ''

  let m = 0;
  let s1 = arg1.toString();
  let s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) { }
  try {
    m += s2.split('.')[1].length;
  } catch (e) { }
  return (
    (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
    Math.pow(10, m)
  );
}

function accDiv (arg1, arg2) {

  arg1 = arg1 || ''
  arg2 = arg2 || ''

  let t1 = 0;
  let t2 = 0;
  let r1, r2;
  try {
    t1 = arg1.toString().split('.')[1].length;
  } catch (e) { }
  try {
    t2 = arg2.toString().split('.')[1].length;
  } catch (e) { }
  r1 = Number(arg1.toString().replace('.', ''));
  r2 = Number(arg2.toString().replace('.', ''));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
