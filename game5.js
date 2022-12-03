let radio;
function setup() {
  createCanvas(600,600);
  radio = createRadio();
  radio.option('rectangle');
  radio.option('circle');
  radio.option('rounded rectangle');
  radio.position(400,25)
  radio.style('width','60px'); 
  textAlign(CENTER);
  fill(255, 0, 0);
}

function draw() {
  let val = radio.value();
  background(250);
  
  if(val =='rectangle')
    {
      rect(50,50,100,100)
    }
  else if (val=='circle')
    {
      circle(100,100,100)
    }
  else if(val=='rounded rectangle')
    {
      rect(50,50,100,100,10)
    }
  
  
}