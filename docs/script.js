const defaultLevel = 2
const maxLevel = 6

function hide(level) {
  const elements = document.querySelectorAll(`.level-${level}`)
  elements.forEach(elem => {
    elem.classList.add("hidden")
  })
}

function show(level) {
  const elements = document.querySelectorAll(`.level-${level}`)
  elements.forEach(elem => {
    elem.classList.remove("hidden")
  })
}

function hideAll() {
  for (let i = 1; i <= maxLevel; i++) {
    hide(i)
  }
}

hideAll()
show(defaultLevel)

const radios = document.querySelectorAll("input[name=level-selector]"); // Get the button from the page

radios.forEach(radio => {
  radio.addEventListener("change", event => {
    const level = +event.target.value
    hideAll()
    show(level)
  })
  if (defaultLevel === +radio.value) {
    radio.checked = true
  }
})
