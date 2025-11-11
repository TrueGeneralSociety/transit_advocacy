// https://expressjs.com/en/guide/routing.html

// REQUIRES
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

// just like a simple web server like Apache web server
// we are mapping file system paths to the app's virtual paths
app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));
// serve data (HTML fragments and JSON) so client can request /data/...
app.use("/data", express.static("./app/data"));
// serve HTML pages under app/html so links like /html/metros.html work
app.use("/html", express.static("./app/html"));

app.get("/", function (req, res) {
  //console.log(process.env);
  // retrieve and send an HTML document from the file system
  let doc = fs.readFileSync("./app/html/index.html", "utf8");
  res.send(doc);
});

app.get("/hello", function (req, res) {
  // just send some plain text
  res.send("Hello world!");
});

app.get("/helloHTML", function (req, res) {
  // hard-coded HTML
  res.send(
    "<html><head><title>Hi!</title></head><body><p>Hello!</p></body></html>"
  );
});

app.get("/profile", function (req, res) {
  let doc = fs.readFileSync("./app/html/profile.html", "utf8");

  // just send the text stream
  res.send(doc);
});

// app.get("/car.html", function (req, res) {
//   res.setHeader("Content-Type", "text/html");
//   res.send(fs.readFileSync("./app/data/weekdays.html", "utf8"));
// });

// for resource not found (i.e., 404)
app.use(function (req, res, next) {
  // this could be a separate file too - but you'd have to make sure that you have the path
  // correct, otherewise, you'd get a 404 on the 404 (actually a 500 on the 404)
  res
    .status(404)
    .send(
      "<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>"
    );
});

// RUN SERVER
let port = 8000;
app.listen(port, function () {
  console.log("Assignment site listening on port " + port + "!");
});
