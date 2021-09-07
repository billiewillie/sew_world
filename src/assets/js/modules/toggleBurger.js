const toggleBurgers = (burgers) => {
  burgers.forEach((burger) => {
    burger.addEventListener('click', () => burger.classList.toggle('toggled'));
  })
}

export default toggleBurgers;