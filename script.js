const dateEl = document.querySelector("#date")
const programEl = document.querySelector('#program')
const profileEl = document.querySelector('#profile')





//Sets current date 
setInterval(function () {
    var time = moment().format("dddd, h:mm:ss a");
    dateEl.textContent = time;
  }, 1000);

  

  //Opens Program page
  const programPage = () =>{
window.open("/program.html")
  }
  programEl.addEventListener("click", programPage)


// Opens Profile page
  const profilePage = () =>{
    window.open("/profile.html")
      }
      profileEl.addEventListener("click", profilePage)