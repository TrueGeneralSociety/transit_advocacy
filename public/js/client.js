console.log("Client script loaded.");

//DOM elements
const readCarBtn = document.getElementById("read_car");
const readBikeBtn = document.getElementById("read_bike");
const readWalkBtn = document.getElementById("read_walk");
const readBusBtn = document.getElementById("read_bus");
const readTramBtn = document.getElementById("read_tram");
const readMetroBtn = document.getElementById("read_metro");
const readTrainBtn = document.getElementById("read_train");

// a function declaration inside of a callback ... which takes a callback function :O
function ajaxGET(url, callback) {
  const xhr = new XMLHttpRequest();

  //console.log("xhr", xhr);
  xhr.onload = function () {
    value = this.responseText;
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      //console.log('responseText:' + xhr.responseText);

      // callback function
      value = this.responseText;
      callback(this.responseText);
    } else {
      console.log(this.status);
    }
  };
  xhr.open("GET", url); // localhost:8000/weekdays?format=html
  xhr.send();
}

let car_active = false;
readCarBtn.addEventListener("click", function () {
  ajaxGET("/data/fragments/car.html", function (response) {
    //read car.html fragment into a variable
    const carElem = document.getElementById("read_more_car");
    if (carElem) {
      if (car_active) {
        carElem.innerHTML = "";
        readCarBtn.innerHTML = "Read More";
        car_active = false;
      } else {
        readCarBtn.innerHTML = "Read Less";
        carElem.innerHTML = response;
        car_active = true;
      }
    }
  });
});
