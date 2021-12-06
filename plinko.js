//colorz
var gravity = 0.06; // speed at which the ball drops  ideal speed = 0.06
var pegs = []; //empty array for pegs
var balls = []; // empty array for balls
var rows = 13; //number of rows *KEEP AT 13*
var slots = [];//array of slots

var currentS = 1;
var stillPlaying = true;
//this gets changed
var ballColor = color(207, 15, 27);
var score = 10; // starting score for player
var slotScores = ["x10","x3","x1.5","x1","x1.5","x3","x10"]; //slot scores


//button class
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};
Button.prototype.draw = function() {
    fill(149, 255, 0);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};
Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};
Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};



// contructor function for the pegs
var Pegs = function(x,y){
    this.x = x;
    this.y = y;
    this.height = 8;
    this.width = 8;
    this.radi = this.height/2;
};

// prototype that draws the pegs
Pegs.prototype.draw = function() {
    //color
    fill(255, 255, 255);
    ellipse(this.x,this.y,this.width,this.height);
};

var Slot = function(position){
    this.position = position;
    this.x = 56*position;
    this.y = 375;
    this.height = 36;
    this.width = 7;
    this.radi = this.height/2;
};

// prototype that draws the pegs
Slot.prototype.draw = function() {
    fill(0, 0, 0);
    rect(this.x, this.y, this.width, this.height);
};



// contructor function for the Ball
var Ball = function(x,y,color){
    this.x = x;
    this.y = y;
    this.width = 14;
    this.height = 14;
    this.radi = this.height/2;
    this.isFalling = true;
    this.velocity = 0;
    this.direction = 0;
    this.color = color;
    //(30, 55, 166); //blue
};

//prototype that draws the Ball
Ball.prototype.draw = function() {
    fill(this.color);
    ellipse(this.x,this.y,this.width,this.height);
};


//prototype that makes the ball fall
Ball.prototype.ballDrop = function(){
    if (this.isFalling) {
        this.velocity += gravity;
        this.y += this.velocity; 
        //prevents ball from going out of bounds
        if (this.x < 3) {
            this.direction = + random(1,3);
        } else if (this.x > 397) {
            this.direction = - random(1,3);
        }
        this.x += this.direction;
        
    }
};






//pegCollision prototype
Ball.prototype.pegCollision = function(peg){
    if ((peg.x >= (this.x - 10) && peg.x <= (this.x + 10)) &&
        (peg.y >= (this.y - 10) && peg.y <= (this.y + 10))) {
        if(this.x < peg.x) {
            this.direction = -random(1,3);
        }else {
            this.direction = random(1,3);
        }
    }
};

//slotCollision prototype 
Ball.prototype.slotCollision = function(slot){
    if ((slot.x >= (this.x - 5) && slot.x <= (this.x + 5)) &&
        (slot.y >= (this.y - 5) && slot.y <= (this.y + 5))) {
        if(this.x < slot.x) {
            this.direction = -random(2,4);
        }else {
            this.direction = random(2,4);
        }
    }
};


//nested for loop that pushes new peg values into the empty array
for (var i = 0; i < rows; i++){
    for(var j = 0; j < i; j++){
        pegs.push(new Pegs(-16*j+-10+32*i,-21*j+344));
    }
}
    
//for loop for slots
for (var s = 0; s < 8; s++){
    fill(0, 0, 0);
    slots.push(new Slot(s));
} 

//******
var drawGame = function () {
    background(240, 228, 168);
    fill(252, 0, 0);
    textSize(35);
    text("Money:" + " $" + score, 10,17,251,50);
    noFill();
    //for loop that displays slot scores
    for (var i = 0; i < 7; i++){
        textSize(14);
        text(slotScores[i],17+i*57,371);
    }
	
    fill(255, 255, 255);
  

    //for loop that actually displays the pegs
    for (var p = 0; p < pegs.length; p++){
        pegs[p].draw();
    }
    
    //for loop for score boxes
    for ( var s = 0; s < slots.length; s++){
        //fill(0, 0, 0);
        slots[s].draw();
    }

    //for loop that draws the ball falling
    for (var b = 0; b < balls.length; b++){
        //checks when ball hits a peg
        for (var p = 0; p < pegs.length; p++) {
            balls[b].pegCollision(pegs[p]);
        }
        //checks when ball hits a slot at the bottom
        for (var s = 0; s < slots.length; s++) {
            balls[b].slotCollision(slots[s]);
            }
            
        balls[b].ballDrop();
        //ball color
        //fill(255, 0, 0);
        balls[b].draw();
		
			// if statements for the score
		if (balls[b].x >= 40 && balls[b].x <= 130 && balls[b].y >= 396 && balls[b].y <=397){
			score = score + 5*3;
		}
		else if(balls[b].x >= 10 && balls[b].x <= 100 && balls[b].y >= 396 && balls[b].y <=397){
			score = score + 5*10;
		}
		else if(balls[b].x >= 130 && balls[b].x <= 170 && balls[b].y >= 396 && balls[b].y <=397){
			score = score + 5*1.5;
		}
		else if(balls[b].x >= 185 && balls[b].x <= 240 && balls[b].y >= 396 && balls[b].y <=397){
			score = score + 5*1;
		}
		else if(balls[b].x >= 250 && balls[b].x <= 300 && balls[b].y >= 396 && balls[b].y <=397){
			score = score + 5*1.5;
		}
		else if(balls[b].x >= 320 && balls[b].x <= 360 && balls[b].y >= 396 && balls[b].y <=397){
			score = score + 5*3;
		}
		else if(balls[b].x >= 365 && balls[b].x <= 400 && balls[b].y >= 396 && balls[b].y <=397){
			score = score + 5*10;
		}
    }
};



//changes ball color to red
var redButton = new Button({
    x: 25,
    y: 25,
    width: 100,
    label: "Red",
    onClick: function() {
        ballColor = color(207, 15, 27);
    }
});

//changes ball color to yellow
var yellowButton = new Button({
    x: 150,
    y: 25,
    width: 100,
    label: "Yellow",
    onClick: function() {
        ballColor = color(255, 255, 0);
    }
});

//changes ball color to blue
var blueButton = new Button({
    x: 275,
    y: 25,
    width: 100,
    label: "Blue",
    onClick: function() {
        ballColor = color(37, 27, 171);
    }
});

//changes ball color to black
var blackButton = new Button({
    x: 25,
    y: 100,
    width: 100,
    label: "Black",
    onClick: function() {
        ballColor = color(0, 0, 0);
    }
});

//changes ball color to green
var greenButton = new Button({
    x: 150,
    y: 100,
    width: 100,
    label: "Green",
    onClick: function() {
        ballColor = color(24, 194, 35);
    }
});

//changes ball color to white
var whiteButton = new Button({
    x: 275,
    y: 100,
    width: 100,
    label: "White",
    onClick: function() {
        ballColor = color(255, 255, 255);
    }
});

//changes ball color to purple
var purpleButton = new Button({
    x: 25,
    y: 175,
    width: 100,
    label: "Purple",
    onClick: function() {
        ballColor = color(105, 13, 135);
    }
});

//changes ball color to gold
var goldButton = new Button({
    x: 150,
    y: 175,
    width: 100,
    label: "Gold",
    onClick: function() {
        ballColor = color(232, 219, 100);
    }
});

//changes ball color to silver
var silverButton = new Button({
    x: 275,
    y: 175,
    width: 100,
    label: "Silver",
    onClick: function() {
        ballColor = color(192, 196, 196);
    }
});

//brings player to game screen
var startButton = new Button({
    x: 120,
    y: 325,
    width: 170,
    label: "Play",
    onClick: function() {
        currentS = 3;
        drawGame();
    }
});

var drawColor = function () {
    currentS = 2;
    background(44, 222, 222);
    yellowButton.draw();
    redButton.draw();
    blueButton.draw();
    blackButton.draw();
    greenButton.draw();
    whiteButton.draw();
    purpleButton.draw();
    goldButton.draw();
    silverButton.draw();
    startButton.draw();
};

//button brings player to color choose screen
var startColor = new Button({
    x: 120,
    y: 325,
    width: 170,
    label: "Play",
    onClick: function() {
        currentS = 2;
        drawColor();
    }
});


//start screen
var drawHome = function () {
    currentS = 1;
    background(44, 222, 222);
    fill(144, 50, 237);
    textSize(85);
    text("|-Plinko-|", 37, 5);
    textSize(16);
    text("|Try to get the most money!|", 2, 175); 
    text("|Pay $5 to drop 1 ball, for a chance to win big!|", 5, 192);
    textSize(20);
    text("By_____", 110, 115);
    startColor.draw();
};


draw = function() {
    if (currentS === 1) {
        drawHome();
    } else if (currentS ===2) {
        drawColor();
    }else if (stillPlaying) {
        drawGame();
    } 
};    


//when the mouse is clicked, push a new plinkoBall into the empty balls array
mouseClicked = function(){
        if (currentS === 1) {
            startColor.handleMouseClick();    
        } else if (currentS ===2) {
            redButton.handleMouseClick();
            yellowButton.handleMouseClick();
            blueButton.handleMouseClick();
            blackButton.handleMouseClick();
            greenButton.handleMouseClick();
            whiteButton.handleMouseClick();
            purpleButton.handleMouseClick();
            goldButton.handleMouseClick();
            silverButton.handleMouseClick();
            startButton.handleMouseClick();
        }else {
            balls.push(new Ball(mouseX,50,ballColor));
			score = score - 5;			
        }
};
