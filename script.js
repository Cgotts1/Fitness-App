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
window.location.replace("./program.html")                //window.open orpens a new page whereas window.location.replace is within the same tab
  }
  programEl.addEventListener("click", programPage)


// Opens Profile page
  const profilePage = () =>{
    window.location.replace("./profile.html")
      }
      profileEl.addEventListener("click", profilePage)