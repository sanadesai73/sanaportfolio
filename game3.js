// variables for text

let txtWelcome , txtInst, txtResult  

// button for games and RPS
let btn1game, btn3Game, btn5Game , btnR, BtnP, BtnS

// button end the game and replay

let btnREplay , btnEnd

// variable for computerChoice

let compOpt;


function setup() {
 
  createCanvas(400, 400);
  txtWelcome = "WELCOME TO MY GAME "
 
  txtInst = "please choose your game format"
  txtResult = ""
 
  // buttons for 1 3 5 games
 
  btn1Game = createButton('Single Game')
  btn1Game.position(25, 150)
  btn1Game.style('width', '100px')
  btn1Game.mousePressed( NewGame )
 
  btn3Game = createButton('Best of Three')
  btn3Game.position(150, 150)
  btn3Game.style('width', '100px')
 
  btn5Game = createButton('Best of Five')
  btn5Game.position(275, 150)
  btn5Game.style('width', '100px')
 
  // button for R P S
 
  btnR = createButton('Rock')
  btnR.position(25, 180)
  btnR.style('width', '100px')
  btnR.hide()
  btnR.mousePressed( CompareRock )
 
  btnP = createButton('Paper')
  btnP.position(150, 180)
  btnP.style('width', '100px')
  btnP.hide()
  btnP.mousePressed( ComparePaper )
 
  btnS = createButton('Scissors')
  btnS.position(275, 180)
  btnS.style('width', '100px')
  btnS.hide()
  btnS.mousePressed( CompareScissors )
 
  // button for replay or end game
  btnREplay = createButton('Replay')
  btnREplay.position(205, 150)
  btnREplay.style('width', '100px')
  btnREplay.hide()
  btnREplay.mousePressed( NewGame )
  
   btnEnd = createButton('End')
  btnEnd.position(100, 150)
  btnEnd.style('width', '100px')
  btnEnd.hide()
 
 
  //reset random number compOpt
 
 
}

function draw() {
  background("orange");
 
  text( txtWelcome, 60, 60)
  textFont("futura")
  textSize(22)
  fill("white")
  text( txtInst, 35, 90)
  text( txtResult , 120, 300)
 
}

function showRPS()
{
 
  txtInst = " choose among rock,  paper, scissors"
  txtResult = ""
 
  //hide game options
  btn1Game.hide()
  btn3Game.hide()
  btn5Game.hide()
 
  //show Rock paper scissors buttons
 
  btnR.show()
  btnP.show()
  btnS.show()
 
}

function CompareRock()
  {  
    if(compOpt == 1)
      {
       txtResult = "It's Draw"  
      }
    else if(compOpt == 2)
      {
       txtResult = "Computer Won ! "  
      }
    else
      {
        txtResult = "You Won !"
      }  
 ShowResult()

  }

function ComparePaper()
{if(compOpt == 2)
      {
       txtResult = "It's Draw"  
      }
    else if(compOpt == 1)
      {
       txtResult = "Computer Won ! "  
      }
    else
      {
        txtResult = "You Won !"
      }  
  ShowResult()

}

function CompareScissors()
{if(compOpt == 1)
      {
       txtResult = "Computer Won !"  
      }
    else if(compOpt == 2)
      {
       txtResult = "It's Draw "  
      }
    else
      {
        txtResult = "You Won !"
      }  
 ShowResult()
}

function NewGame()
{
 
  compOpt = round(random (0.5, 3.5) )
  showRPS();
   btnEnd.hide()
    btnREplay.hide()

 
}
function ShowResult()
{
  btnR.hide()
  btnP.hide()
  
btnS.hide()
  
  txtWelcome=""
  txtInst=""
  
  btnREplay.show()
  btnEnd.show()
  
  
}