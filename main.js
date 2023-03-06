let inputText = document.querySelector('.form__input');
const btn = document.querySelector('.form__btn');
const ul = document.querySelector('.ul');
const error = document.querySelector('.error')

btn.addEventListener('click', (event) => {
  event.preventDefault()
  let textValue = inputText.value
  console.log(textValue)
  inputText.value = ''



  if(textValue === ''){
    error.style.display = 'block'
  } else {
    error.style.display = 'none'

    let li = document.createElement('li')
    li.classList.add('task')
    ul.appendChild(li)
  
    let div = document.createElement('div')
    div.classList.add('task__container')
    li.appendChild(div)
    
    div.appendChild(iconComplete())
  
    let span = document.createElement('span')
    span.classList.add('task__title')
    div.appendChild(span).innerHTML = textValue
  
    li.appendChild(deleteIcon())
  }
})


const iconComplete = () => {
  let i = document.createElement('i')
  i.classList.add('fa-sharp', 'fa-regular', 'fa-square-check')
  i.addEventListener('click', () => {
    i.classList.toggle('fa-solid')
    i.classList.toggle('fa-regular')
    i.classList.toggle('active')

  })
  return i
}

const deleteIcon = () => {
  let i = document.createElement('i')
  i.classList.add('fa-solid', 'fa-trash', 'delete')
  i.addEventListener('click', (event) => {
    let deleted = event.target.parentElement
    deleted.remove()
  })
  return i
}