//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.js";

let seconds = 0;
setInterval(() => {
    console.log("Hola mundo");


//render your react application
ReactDOM.render(<SecondsCounter seconds={seconds}/>, document.querySelector("#app"));
seconds++;
},1000);
