let burgerMenu = document.querySelector(".burger-menu")
let mobList = document.querySelector(".mob-list")

burgerMenu.addEventListener("click", () => {
    mobList.classList.toggle("appearance")
})