const elements = document.querySelectorAll('.vert')

elements.forEach(element => {
  element.onclick(() => element.parentNode.classList.add('active'))
})
