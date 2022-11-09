const btn = document.querySelector(".useravatar_btn")
const listOfItems = document.querySelector("#useravatar__cont")

btn.addEventListener("click", () => {
    // listOfItems.classList.add("hidden")
   listOfItems.classList.toggle("visible")
   console.log("AddClass__UserAvatar")
  })