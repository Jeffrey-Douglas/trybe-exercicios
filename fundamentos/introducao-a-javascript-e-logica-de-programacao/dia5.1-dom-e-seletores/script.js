// document.getElementsByTagName(".section")[0].style.color = "blue";
// document.querySelectorAll(".div .h3")[0] = "red";
// document.querySelector(".emergency-tasks").style.color = "red";
// document.getElementsByClassName("emergency-tasks")[0] = "red";

// document.querySelector("#paragraph").style.color = "red";


// let filmao = document.querySelectorAll("#footer-container");
// for (let i = 0; i < filmao.length; i += 1) {
//     filmao[i].innerText = "filme incrivel";
// }
// document.getElementById("container").style.backgroundColor = "red";

// let batata = document.getElementsByClassName("emergency-tasks");
// for (let i = 0; i < batata.length; i += 1) {
//     batata[i].innerText = "filme incrivel";
// }


document.querySelector("h1").style.backgroundColor = "#00b069"


let batata = document.getElementsByClassName("emergency-tasks");
for (let i = 0; i < batata.length; i += 1) {
    batata[i].style.backgroundColor = "#ff9f84";
}

let batatas = document.getElementsByClassName("no-emergency-tasks");
for (let i = 0; i < batatas.length; i += 1) {
    batatas[i].style.backgroundColor = "#f9db5e";
} 

// document.querySelectorAll(".emergency-tasks h3")[0].style.backgroundColor = "#a500f3";

let important = document.querySelectorAll(".emergency-tasks h3")
for (let i = 0; i < important.length; i += 1) {
    important[i].style.backgroundColor = "#a500f3";
}

let noImportant = document.querySelectorAll(".no-emergency-tasks h3")
for (let i = 0; i < noImportant.length; i += 1) {
    noImportant[i].style.backgroundColor = "#232525";
}

document.getElementById("footer-container").style.backgroundColor = "#003533";