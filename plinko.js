var gravity = 0.06; // speed at which the ball drops  ideal speed = 0.06
var pegs = []; //empty array for pegs
var balls = []; // empty array for balls
var rows = 13; //number of rows *KEEP AT 13*
var slots = [];//array of slots
var score = 10; // starting score for player
var slotScores = ["x10","x3","x1.5","x1","x1.5","x3","x10"]; //slot scores

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
    rect(this.x, this.y, this.width, this.height);
};



// contructor function for the Ball
var Ball = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 14;
    this.height = 14;
    this.radi = this.height/2;
    this.isFalling = true;
    this.velocity = 0;
    this.direction = 0;
};

//prototype that draws the Ball
Ball.prototype.draw = function() {
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


//defines plinkoBall as a new ball    
var plinkoBall = new Ball(200,50);



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



draw = function() {
    //static
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
        fill(0, 0, 0);
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
        fill(255, 0, 0);
        balls[b].draw();
    }
    // if statements for the score
    if (plinkoBall.x >= 40 && plinkoBall.x <= 130 && plinkoBall.y >= 396 && plinkoBall.y <=397){
        score = score + 5*3;
    }
    else if(plinkoBall.x >= 10 && plinkoBall.x <= 100 && plinkoBall.y >= 396 && plinkoBall.y <=397){
        score = score + 5*10;
    }
    else if(plinkoBall.x >= 130 && plinkoBall.x <= 170 && plinkoBall.y >= 396 && plinkoBall.y <=397){
        score = score + 5*1.5;
    }
    else if(plinkoBall.x >= 185 && plinkoBall.x <= 240 && plinkoBall.y >= 396 && plinkoBall.y <=397){
        score = score + 5*1;
    }
    else if(plinkoBall.x >= 250 && plinkoBall.x <= 300 && plinkoBall.y >= 396 && plinkoBall.y <=397){
        score = score + 5*1.5;
    }
    else if(plinkoBall.x >= 320 && plinkoBall.x <= 360 && plinkoBall.y >= 396 && plinkoBall.y <=397){
        score = score + 5*3;
    }
    else if(plinkoBall.x >= 365 && plinkoBall.x <= 400 && plinkoBall.y >= 396 && plinkoBall.y <=397){
        score = score + 5*10;
    }
    fill(255, 0, 0);
    
};
//when the mouse is clicked, push a new plinkoBall into the empty balls array
mouseClicked = function(){
        balls.push(plinkoBall = new Ball(mouseX,50));
        score = score - 5;
};
