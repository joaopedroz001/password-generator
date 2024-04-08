const lowerLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))
const upperLetters = lowerLetters.map((letra) => letra.toUpperCase())
const wildcardChars = ['!', '@', '#', '$', '%', '&', '*']
const numbers = Array.from({length: 10}, (_, i) => i.toString())

const pwLength = document.querySelector('#passwordLengthInput')
const generatedPw = document.querySelector('.generatedPw')
const lower = document.querySelector('#lowerCaseChar')
const upper = document.querySelector('#upperCaseChar')
const wildcard = document.querySelector('#wildcardChar')
const number = document.querySelector('#numberChar')

const randInt = (max) => {
  return Math.floor(Math.random() * max)
}

pwLength.addEventListener('input', () => {
  document.querySelector('.passwordLenghtSpan').innerHTML = pwLength.value
})

document.querySelector('.btn').addEventListener('click', () => {
  if (lower.checked || upper.checked || wildcard.checked || number.checked) {
    let charArray = new Array
    let password = new String

    if (lower.checked) charArray.push(lowerLetters)
    if (upper.checked) charArray.push(upperLetters)
    if (wildcard.checked) charArray.push(wildcardChars)
    if (number.checked) charArray.push(numbers)

    for (let i = 0; i < pwLength.value; i++) {
      let _ = randInt(charArray.length)
      password += charArray[_][randInt(charArray[_].length)]
    }

    generatedPw.innerHTML = password
  } else {
    alert('Mark at least one character type.')
  }
})


// CHANGE PAGE THEME BUTTON
var count = 1

const changeBgColor = (moonClass, sunClass, colorTheme) => {
  document.querySelector('.moon').className = moonClass
  document.querySelector('.sun').className = sunClass
  document.documentElement.setAttribute('data-bs-theme', colorTheme)
  count++
}

document.querySelector('.changeTheme').addEventListener('click', () => {
  count % 2 === 0 ?
  changeBgColor('moon show', 'sun', 'white') :
  changeBgColor('moon', 'sun show', 'dark')
})