
var socket;



function setup() {
  createCanvas(400, 400);
  background(0);
  
  socket = io.connect('http://localhost:3000');
  
  socket.on('mouse',
    
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      // Draw a blue circle
      fill(0,0,255);
      noStroke();
      ellipse(data.x, data.y, 20, 20);
    }
  );
}
    
        $('form').submit(function(){
          socket.emit('chatmessage', $('#m').val());
          $('#m').val('');
          return false;
        });

function draw() {
  
}

function mouseDragged() {

  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,20,20);

  sendmouse(mouseX,mouseY);
}


function sendmouse(xpos, ypos) {
 
  console.log("sendmouse: " + xpos + " " + ypos);
  
  var data = {
    x: xpos,
    y: ypos
  };
  socket.emit('mouse',data);
}