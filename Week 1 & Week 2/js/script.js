var question = window.prompt("What is your name?");

window.alert("Hello, " + question);

var box3 = document.getElementById("box3");
box3.style.display = "none";

changeBackgroundColor("box4", "purple");

addElement();

function changeBackgroundColor(id, color) {
    var currentId = document.getElementById(id);
    currentId.style.backgroundColor = color;
}

function changeText() {
    var h1List = document.getElementsByTagName("H1");
    console.log(h1List.length);
    h1List[0].innerHTML = "Goodbye";
}

function mDown(obj) {
    obj.style.backgroundColor = "turquoise";
    obj.innerHTML = "Release Me";
}

function mUp(obj) {
    obj.style.backgroundColor = "red";
    obj.innerHTML = "Thank You";
}

function mOver(obj) {
    obj.innerHTML = "Over";
}

function mOut(obj) {
    obj.innerHTML = "And Out";
}


function addElement() {
    var parent = document.createElement("div");
    parent.id = "box7";
    parent.classList.add("boxes");
    parent.innerHTML = "Box 7";
    parent.style.backgroundColor = "orange";
    document.body.appendChild(parent);
}