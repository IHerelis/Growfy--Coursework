// ===== burger--btn =====
const menu = document.querySelector(".header__elements")
    const button = document.querySelector(".burger--btn")

    button.addEventListener('click', () => {
      if (button.classList.contains('active')) {
        button.classList.remove("active")
        menu.classList.remove("active")
      }
      else {
        button.classList.add("active")
        menu.classList.add("active")
      }
    })
    // ====================