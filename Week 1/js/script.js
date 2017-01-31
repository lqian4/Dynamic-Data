var question = window.prompt("What is your name?");;

window.alert("Hello, " + question);

function changeBackgroundColor(id, color) {
    var currentId = document.getElementById(id);
    currentId.style.backgroundColor = color;
}