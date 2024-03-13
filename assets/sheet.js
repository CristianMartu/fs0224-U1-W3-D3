const handleSubmit = (e) => {
  e.preventDefault()

  const nameInput = document.getElementById('name')

  const main = document.querySelector('main')
  const conteiner = document.createElement('div')
  const task = document.createElement('p')
  task.innerText = nameInput.value
  const button = document.createElement('button')
  button.innerText = 'Elimina'

  conteiner.append(task, button)
  main.appendChild(conteiner)

  task.addEventListener('click', (e) => {
    e.target.style.textDecoration = 'line-through'
  })

  button.addEventListener('click', (e) => {
    e.target.closest('div').remove()
  })

  nameInput.value = ''
}

const form = document.getElementById('form-box')
form.addEventListener('submit', handleSubmit)
