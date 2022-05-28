
export default function testFunction(){
  return true
}

export const capitalize = (s) => 
  s.charAt(0).toUpperCase() + s.slice(1)

export const reverseString = (s) => s.reverse()

export const calculator = {
  add: (a,b) => a + b,
  subtract: (a,b) => a - b,
  divide: (a,b) => a / b,
  multiply: (a,b) => a * b,
}

export const ceaserCipher = (s) => {
  return Array.from(s).map(c => {
    if(c === 'z') return 'a'
    else if(c === 'Z') return 'A'
    return String.fromCharCode(1 + c.charCodeAt(0))
  }).join('')
}

export const analyzeArray = (arr) => ({
  average: Math.round(1000 * (arr.reduce((a,b)=> a+b) / arr.length)) / 1000,
  max: arr.reduce((a,b)=> a >= b ? a : b),
  min: arr.reduce((a,b)=> a <= b ? a : b),
  length: arr.length,
})
