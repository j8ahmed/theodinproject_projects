import testFunction, {
  capitalize,
  reverseString,
  calculator,
  ceaserCipher,
  analyzeArray,
} from './practice'

test('test the function returns true', () => {
  expect(testFunction()).toBe(true)
})

// capitalize function test
test('The function takes a string and returns it with the first character capitalized', () => {
  expect(capitalize('hello')).toBe('Hello')
  expect(capitalize('abc')).toBe('Abc')
})

// calculator object tests
describe('Calculator tests:', () => {

  test('Test Calculators add method', () => {
    expect(calculator.add(10,5)).toBe(15)
  })

  test('Test Calculators subtract method', () => {
    expect(calculator.subtract(10,5)).toBe(5)
  })

  test('Test Calculators divide method', () => {
    expect(calculator.divide(10,5)).toBe(2)
  })

  test('Test Calculators multiply method', () => {
    expect(calculator.multiply(10,5)).toBe(50)
  })

})

// ceaserCipher function test
describe('Test ceaserCipher fuction which takes a string and returns with each character shifted by 1 character', () => {
  
  test('Letters shift correctly when passed to cipher', () => {
    expect(ceaserCipher('ABC')).toBe('BCD')
  })

  test('Letters shift correctly when at the end of the alphabet', () => {
    expect(ceaserCipher('zebra')).toBe('afcsb')
  })

  test('punctuations shift correctly when passed to cipher', () => {
    expect(ceaserCipher('hello.')).toBe('ifmmp/')
  })
})

// analyzeArray function test
describe('Test analyzeArray fuction which takes an array of numbers and returns an object with the properties: average, min, max, length.', () => {

  const {average, min, max, length} = analyzeArray([1,2,3,10,4,5])

  test('Test the average property', () => {
    expect(average).toBe(4.167)
  })

  test('Test the min property', () => {
    expect(min).toBe(1)
  })

  test('Test the max property', () => {
    expect(max).toBe(10)
  })

  test('Test the length property', () => {
    expect(length).toBe(6)
  })


})
