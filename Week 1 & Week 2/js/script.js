var question = window.prompt("What is your name?");

window.alert("Hello, " + question);


function mDown(obj) {
    obj.style.backgroundColor = "orpiment";
    obj.innerHTML = "Fill in the blanks first";
}

function mUp(obj) {
    obj.style.backgroundColor = "beige";

    obj.innerHTML = "Are you ready to battle?";
   
}

function mOver(obj) {
    obj.innerHTML = "Are you sure?";
}

function mOut(obj) {
    obj.innerHTML = "Join the battle";
}


function mClick(obj) {
    window.alert("Are you sure you are ready?");
}
