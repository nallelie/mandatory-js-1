
const header = document.getElementsByTagName("h1")[0];
header.textContent = "Fruits & Vegetables Corp";

var head = document.head;
var link2 = document.createElement("link");

link2.type = "text/css";
link2.rel = "stylesheet";
link2.href = "main.css";

head.appendChild(link2);


const title = document.getElementsByTagName("title")[0];
title.textContent = "Fruits & Vegetables Corp";

const link = document.getElementsByTagName("a")[2];
link.textContent = "Vegetables";

let header1 = document.createElement("H2")
let about = document.createTextNode("About");
document.body.appendChild(header1);
header1.appendChild(about);
main.insertBefore(header1, main.childNodes[0]);

const aboutText = document.getElementById("about");
main.insertBefore(aboutText, main.childNodes[1]);


let header2 = document.createElement("H2")
let contact = document.createTextNode("Contact");
document.body.appendChild(header2);
header2.appendChild(contact);
main.insertBefore(header2, main.childNodes[2]);

const td = document.getElementsByTagName("td");

changeElement("Name");
changeElement("Email");


function changeElement(text)
{
    let theader = document.createElement("th");
    theader.id = "newTh";
    let theaderInfo = document.createTextNode(text);
    theader.appendChild(theaderInfo);
    let oldTd = document.getElementsByTagName("td")[0];
    let parent = oldTd.parentNode;
    parent.replaceChild(theader, oldTd);
}

