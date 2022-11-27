let homepageBtn = document.querySelector("#homepage-btn")
let customizeEl = document.querySelector(".customize")

let homepageClick = ()=>{
    window.location.replace("./index.html")
      }
      homepageBtn.addEventListener("click", homepageClick)

let customizeClick = () =>{
  window.location.replace("./customize.html")
}
customizeEl.addEventListener("click", customizeClick)