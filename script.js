const underline0 = document.getElementById('underline0')
const underline1 = document.getElementById('underline1')
const underline2 = document.getElementById('underline2')
const underline3 = document.getElementById('underline3')
const underline4 = document.getElementById('underline4')
const line0 = document.getElementById('line0')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
const line4 = document.getElementById('line4')


//first
  line0.addEventListener('mouseover', (e) => {
  underline0.classList.add('active')
})
  line0.addEventListener('mouseout', (e) => {
  underline0.classList.remove('active')
})

//second
line1.addEventListener('mouseover', (e) => {
underline1.classList.add('active')
})
line1.addEventListener('mouseout', (e) => {
underline1.classList.remove('active')
})

//third
line2.addEventListener('mouseover', (e) => {
underline2.classList.add('active')
})
line2.addEventListener('mouseout', (e) => {
underline2.classList.remove('active')
})

//fourth
line3.addEventListener('mouseover', (e) => {
underline3.classList.add('active')
})
line3.addEventListener('mouseout', (e) => {
underline3.classList.remove('active')
})

//fifth
line4.addEventListener('mouseover', (e) => {
underline4.classList.add('active')
})
line4.addEventListener('mouseout', (e) => {
underline4.classList.remove('active')
})

//tendina mobile
const minimenu = document.querySelector('.minimenu');
const tendina = document.querySelector('.tendina');

minimenu.addEventListener('click', (e)=> {
  tendina.classList.add('active')
})

const litendina = document.querySelector('.litendina');
const closetendina = document.querySelector('.closetendina');

litendina.addEventListener('click', (e)=> {
  tendina.classList.remove('active')
})

closetendina.addEventListener('click', (e)=> {
  tendina.classList.remove('active')
})
