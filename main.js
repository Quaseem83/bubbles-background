var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

//ctx.arc(300, 200, 100, 0, 2 * Math.PI);
//ctx.stroke();

//ctx.beginPath();
//ctx.arc(1200, 200, 100, 0, 2 * Math.PI);
//ctx.stroke();

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var radius = 30;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = "aqua";
    ctx.stroke();
  };

  this.update = function() {
    if (x + radius > innerWidth || x - radius < 0) {
      dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
      dy = -dy;
    }

    x += dx;
    y += dy;

    this.draw();
  };
}

var circleArray = [];

for (var i = 0; i < 150; i++) {
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius + 2) + radius;
  var radius = Math.random() * 15;
  var dx = (Math.random() - 0.5) * 8;
  var dy = (Math.random() - 0.5) * 8;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
