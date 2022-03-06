const inputElement = document.querySelector('input')
const addButtonElement = document.querySelector('section div button')
const ulElement = document.querySelector('section ul')

addButtonElement.addEventListener('click', () => {
    const newLiElement = document.createElement('li')
    const newButtonElement = document.createElement('button')
    const newSpanElement = document.createElement('span')

    newSpanElement.innerHTML = `${inputElement.value}`
    newButtonElement.innerHTML = `Remover`

    newLiElement.appendChild(newSpanElement)
    newLiElement.appendChild(newButtonElement)

    ulElement.append(newLiElement)

    inputElement.value = ''

    newButtonElement.addEventListener('click', () => {
        newLiElement.remove()
    })
})


