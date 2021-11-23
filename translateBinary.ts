function translate() {
  let arrString = 'CTCACGCCCTATCTCA'.replace(/\s+/g, '')
  console.log(arrString)
  let arr = arrString
  let rem = arr.replace(/\s+/g, '');
  console.log(rem)
  let re = /.{1}/g
  let result = rem.match(re)
  console.log(result)
  for (let i = 0; i < result.length; i++) {
    if (result[i] === 'A') {
      result[i] = '00';
    } else if (result[i] === 'C') {
      result[i] = '01';
    } else if (result[i] === 'G') {
      result[i] = '10';
    } else if (result[i] === 'T') {
      result[i] = '11';
    }
  }
  return result.toString()
}

console.log(translate())