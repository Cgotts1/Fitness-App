let dateEl = document.querySelector("#date")



setInterval(function () {
    var time = moment().format("dddd, h:mm:ss a");
    dateEl.textContent = time;
  }, 1000);

  