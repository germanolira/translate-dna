function translate() {
  let arrString = '01110100 01100101 01110011 01110100 '.replace(/\s+/g, '')
  console.log(arrString)
  let arr = arrString
  let rem = arr.replace(/\s+/g, '');
  console.log(rem)
  let re = /.{2}/g
  let result = rem.match(re)
  console.log(result)
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '00') {
      result[i] = 'A';
    } else if (result[i] === '01') {
      result[i] = 'C';
    } else if (result[i] === '10') {
      result[i] = 'G';
    } else if (result[i] === '11') {
      result[i] = 'T';
    }
  }
  return result.toString()
}

console.log(translate())

// FUNCIONOU!!! 🎆🎆