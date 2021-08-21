// document.getElementById("page-title").innerText = "V de Vingança";
// document.getElementById("paragraph").style.color = "red";
// document.getElementById("subtitle").innerText = "Melhor filme"; 

// let filmao = document.getElementsByClassName("paragrafo");
// for (let i = 0; i < filmao.length; i += 1) {
//     filmao[i].innerText = "filme incrivel";
// }

// document.getElementsByTagName("h4")[0].style.color = "blue";

document.querySelector("#page-title").innerText = "V de Vingança";
document.querySelector("#paragraph").style.color = "red";
document.querySelector("#subtitle").innerText = "Melhor filme"; 

let filmao = document.querySelectorAll(".paragrafo");
for (let i = 0; i < filmao.length; i += 1) {
    filmao[i].innerText = "filme incrivel";
}

document.querySelectorAll("h4")[0].style.color = "blue";