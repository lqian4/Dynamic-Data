function changeText(){
var h1List = document.getElementsByTagName("H1");
console.log("h1List.length");
h1List[0].innerHTML = "goodbye";
}

function mDown(obj){
    obj.style.backgroundColor = "turquoise";
    obj.innerHTML
}

function mOver(obj){
    obj.innerHTML = "over";
}

function mOut(obj){
    obj.innerHTML = "out";
}

function() {
    var parent = document.createElement("div");
    parent.id = "box7";
    parent.classList.add("boxes");
    
    document.body.appendChild(parent);
}