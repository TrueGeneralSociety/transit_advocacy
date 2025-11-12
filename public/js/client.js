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

let tram_active = false;
readTramBtn.addEventListener("click", function () {
  ajaxGET("/data/fragments/tram.html", function (response) {
    //read tram.html fragment into a variable
    const tramElem = document.getElementById("read_more_tram");
    if (tramElem) {
      if (tram_active) {
        tramElem.innerHTML = "";
        readTramBtn.innerHTML = "Read More";
        tram_active = false;
      } else {
        readTramBtn.innerHTML = "Read Less";
        tramElem.innerHTML = response;
        tram_active = true;
      }
    }
  });
});

let bike_active = false;
readBikeBtn.addEventListener("click", function () {
  ajaxGET("/data/fragments/bike.html", function (response) {
    //read bike.html fragment into a variable
    const bikeElem = document.getElementById("read_more_bike");
    if (bikeElem) {
      if (bike_active) {
        bikeElem.innerHTML = "";
        readBikeBtn.innerHTML = "Read More";
        bike_active = false;
      } else {
        readBikeBtn.innerHTML = "Read Less";
        bikeElem.innerHTML = response;
        bike_active = true;
      }
    }
  });
});

let walk_active = false;
readWalkBtn.addEventListener("click", function () {
  ajaxGET("/data/fragments/walk.html", function (response) {
    //read walk.html fragment into a variable
    const walkElem = document.getElementById("read_more_walk");
    if (walkElem) {
      if (walk_active) {
        walkElem.innerHTML = "";
        readWalkBtn.innerHTML = "Read More";
        walk_active = false;
      } else {
        readWalkBtn.innerHTML = "Read Less";
        walkElem.innerHTML = response;
        walk_active = true;
      }
    }
  });
});

let bus_active = false;
readBusBtn.addEventListener("click", function () {
  ajaxGET("/data/fragments/bus.html", function (response) {
    //read bus.html fragment into a variable
    const busElem = document.getElementById("read_more_bus");
    if (busElem) {
      if (bus_active) {
        busElem.innerHTML = "";
        readBusBtn.innerHTML = "Read More";
        bus_active = false;
      } else {
        readBusBtn.innerHTML = "Read Less";
        busElem.innerHTML = response;
        bus_active = true;
      }
    }
  });
});

let metro_active = false;
readMetroBtn.addEventListener("click", function () {
  ajaxGET("/data/fragments/metro.html", function (response) {
    //read metro.html fragment into a variable
    const metroElem = document.getElementById("read_more_metro");
    if (metroElem) {
      if (metro_active) {
        metroElem.innerHTML = "";
        readMetroBtn.innerHTML = "Read More";
        metro_active = false;
      } else {
        readMetroBtn.innerHTML = "Read Less";
        metroElem.innerHTML = response;
        metro_active = true;
      }
    }
  });
});

let train_active = false;
readTrainBtn.addEventListener("click", function () {
  ajaxGET("/data/fragments/train.html", function (response) {
    //read train.html fragment into a variable
    const trainElem = document.getElementById("read_more_train");
    if (trainElem) {
      if (train_active) {
        trainElem.innerHTML = "";
        readTrainBtn.innerHTML = "Read More";
        train_active = false;
      } else {
        readTrainBtn.innerHTML = "Read Less";
        trainElem.innerHTML = response;
        train_active = true;
      }
    }
  });
});
