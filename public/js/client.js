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

///////////////////////////////////////////////////
// document.querySelector("#marker").addEventListener("click", function (e) {
//     ajaxGET("/markers", function (data) {
//         // this call is JSON so we have to parse it:
//         let parsedData = JSON.parse(data);

//         // as a table
//         let str = "<table>";
//         for(let i = 0; i < parsedData.length; i++) {
//             let item = parsedData[i];
//             str += "<tr><td>" + item["title"] + "</td><td>" + item["lat"] + "</td><td>" + item["lng"]
//                 + "</td><td>" + item["description"]
//                 + "</td><td><img alt='ship' src='" + item["image"] + "'/></td></tr>";
//         }
//         str += "</table>";

//         // as a sequence of div elements
// //        let str = "";
// //        for(let i = 0; i < parsedData.length; i++) {
// //            let item = parsedData[i];
// //            str += "<div><p>" + item["title"] + "</p><p>" + item["lat"]
// //              + "</p></div>";
// //        }

//         document.getElementById("marker-data").innerHTML = str;

//         //let d1 = document.createElement("div");
//         //d1.innerHTML = str;
//         //document.body.appendChild(d1);
//         //console.log("after parsing", parsedData);
//     });
// });
// Metro details functionality
/**
 *
 * @param {*} metro - single metro object in the JSON array
 * @param {String} place - place identifier to target the correct details section
 */
async function showMetroDetails(metro, place) {
  try {
    // Build a <ul> element with metro details
    let str =
      "<ul>" +
      "<li><strong>Title: </strong>" +
      metro["title"] +
      "</li>" +
      "<li><strong>Year Opened: </strong>" +
      metro["yearOpened"] +
      "</li>" +
      "<li><strong>System Length: </strong>" +
      metro["systemLength"] +
      "km</li>" +
      "<li><strong>Number of Stations: </strong>" +
      metro["numStations"] +
      "</li>" +
      "<li><strong>Annual Ridership: </strong>" +
      metro["annualRidership"] +
      "</li>" +
      "<li><strong>Description: </strong>" +
      metro["description"] +
      "</li>" +
      "</ul>";
    const detailsSection = document.getElementById(place + "_details");
    detailsSection.innerHTML = str;
  } catch (error) {
    console.error("Error displaying metro details:", error);
  }
}

// Attach event listeners to metro buttons
document
  .getElementById("shanghai_button")
  .addEventListener("click", function () {
    ajaxGET("/data/metros.json", function (data) {
      let parsedMetros = JSON.parse(data);
      const metro = parsedMetros[0];
      showMetroDetails(metro, "shanghai");
    });
  });
document.getElementById("paris_button").addEventListener("click", function () {
  ajaxGET("/data/metros.json", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[6];
    showMetroDetails(metro, "paris");
  });
});
document
  .getElementById("new_york_button")
  .addEventListener("click", function () {
    ajaxGET("/data/metros.json", function (data) {
      let parsedMetros = JSON.parse(data);
      const metro = parsedMetros[2];
      showMetroDetails(metro, "new_york");
    });
  });
document.getElementById("tokyo_button").addEventListener("click", function () {
  ajaxGET("/data/metros.json", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[3];
    showMetroDetails(metro, "tokyo");
  });
});
document.getElementById("london_button").addEventListener("click", function () {
  ajaxGET("/data/metros.json", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[1];
    showMetroDetails(metro, "london");
  });
});
document.getElementById("berlin_button").addEventListener("click", function () {
  ajaxGET("/data/metros.json", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[8];
    showMetroDetails(8, "berlin");
  });
});
document.getElementById("madrid_button").addEventListener("click", function () {
  ajaxGET("/data/metros.json", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[9];
    showMetroDetails(9, "madrid");
  });
});
document.getElementById("moscow_button").addEventListener("click", function () {
  ajaxGET("/data/metros.json", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[4];
    showMetroDetails(metro, "moscow");
  });
});
document.getElementById("seoul_button").addEventListener("click", function () {
  ajaxGET("/data/metros.json", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[7];
    showMetroDetails(7, "seoul");
  });
});
document
  .getElementById("beijing_button")
  .addEventListener("click", function () {
    ajaxGET("/data/metros.json", function (data) {
      let parsedMetros = JSON.parse(data);
      const metro = parsedMetros[5];
      showMetroDetails(metro, "beijing");
    });
  });
