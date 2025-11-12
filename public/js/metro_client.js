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
  console.log("Showing metro details for:", place);

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
  console.log("Shanghai button clicked.");
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[0];
    showMetroDetails(metro, "shanghai");
  });
});
paris_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[6];
    showMetroDetails(metro, "paris");
  });
});
new_york_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[2];
    showMetroDetails(metro, "new_york");
  });
});
tokyo_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[3];
    showMetroDetails(metro, "tokyo");
  });
});
london_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[1];
    showMetroDetails(metro, "london");
  });
});
berlin_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[8];
    showMetroDetails(8, "berlin");
  });
});
madrid_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[9];
    showMetroDetails(9, "madrid");
  });
});
moscow_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[4];
    showMetroDetails(metro, "moscow");
  });
});
seoul_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[7];
    showMetroDetails(7, "seoul");
  });
});
beijing_button.addEventListener("click", function () {
  ajaxGET("/data/metros.js", function (data) {
    let parsedMetros = JSON.parse(data);
    const metro = parsedMetros[5];
    showMetroDetails(metro, "beijing");
  });
});
