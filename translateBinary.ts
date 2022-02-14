function translate() {
  let arrString = 'CTCACGCCCTATCTCA'.replace(/\s+/g, '')
  let arr = arrString
  let rem = arr.replace(/\s+/g, '');
  let re = /.{1}/g
  let result = rem.match(re)
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
  return result.join('')
}

console.log(translate())