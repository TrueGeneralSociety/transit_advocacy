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

// Metro details functionality
/**
 *
 * @param {*} metro - single metro object in the JSON array
 * @param {String} place - place identifier to target the correct details section
 */
function showMetroDetails(metro, place) {
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
}

function hideMetroDetails(place) {
  const detailsSection = document.getElementById(place + "_details");
  detailsSection.innerHTML = "";
}

//DOM elements for metro buttons
shanghai_button = document.getElementById("shanghai_button");
paris_button = document.getElementById("paris_button");
new_york_button = document.getElementById("new_york_button");
berlin_button = document.getElementById("berlin_button");
madrid_button = document.getElementById("madrid_button");
moscow_button = document.getElementById("moscow_button");
seoul_button = document.getElementById("seoul_button");
beijing_button = document.getElementById("beijing_button");
tokyo_button = document.getElementById("tokyo_button");
london_button = document.getElementById("london_button");

// Attach event listeners to metro buttons
shanghai_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[0];
    if (shanghai_button.innerHTML === "Read More") {
      showMetroDetails(metro, "shanghai");
      shanghai_button.innerHTML = "Read Less";
    } else {
      hideMetroDetails("shanghai");
      shanghai_button.innerHTML = "Read More";
    }
  });
});
paris_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[6];
    if (paris_button.innerHTML === "Read More") {
      showMetroDetails(metro, "paris");
      paris_button.innerHTML = "Read Less";
    } else {
      hideMetroDetails("paris");
      paris_button.innerHTML = "Read More";
    }
  });
});
new_york_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[2];
    if (new_york_button.innerHTML === "Read More") {
      showMetroDetails(metro, "new_york");
      new_york_button.innerHTML = "Read Less";
    } else {
      hideMetroDetails("new_york");
      new_york_button.innerHTML = "Read More";
    }
  });
});
tokyo_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[3];
    if (tokyo_button.innerHTML === "Read More") {
      showMetroDetails(metro, "tokyo");
      tokyo_button.innerHTML = "Read Less";
    } else {
      hideMetroDetails("tokyo");
      tokyo_button.innerHTML = "Read More";
    }
  });
});
london_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[1];
    if (london_button.innerHTML === "Read More") {
      showMetroDetails(metro, "london");
      london_button.innerHTML = "Read Less";
    } else {
      hideMetroDetails("london");
      london_button.innerHTML = "Read More";
    }
  });
});
berlin_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[8];
    if (berlin_button.innerHTML === "Read More") {
      showMetroDetails(metro, "berlin");
      berlin_button.innerHTML = "Read Less";
    } else {
      hideMetroDetails("berlin");
      berlin_button.innerHTML = "Read More";
    }
  });
});
madrid_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[9];
    if (madrid_button.innerHTML === "Read More") {
      showMetroDetails(metro, "madrid");
      madrid_button.innerHTML = "Read Less";
    } else {
      hideMetroDetails("madrid");
      madrid_button.innerHTML = "Read More";
    }
  });
});
moscow_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[4];
    if (moscow_button.innerHTML === "Read More") {
      showMetroDetails(metro, "moscow");
      moscow_button.innerHTML = "Read Less";
    } else {
      hideMetroDetails("moscow");
      moscow_button.innerHTML = "Read More";
    }
  });
});
seoul_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[7];
    if (seoul_button.innerHTML === "Read More") {
      showMetroDetails(metro, "seoul");
      seoul_button.innerHTML = "Read Less";
    } else {
      hideMetroDetails("seoul");
      seoul_button.innerHTML = "Read More";
    }
  });
});
beijing_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[5];
    if (beijing_button.innerHTML === "Read More") {
      showMetroDetails(metro, "beijing");
      beijing_button.innerHTML = "Read Less";
    } else {
      hideMetroDetails("beijing");
      beijing_button.innerHTML = "Read More";
    }
  });
});
