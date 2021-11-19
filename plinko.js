var gravity = 0.06; // speed at which the ball drops  ideal speed = 0.06
var pegs = []; //empty array for pegs
var Balls = []; // empty array for Balls
var rows = 13; //number of rows *KEEP AT 13*


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
    ellipse(this.x,this.y,8,8);
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
};

//prototype that draws the Ball
Ball.prototype.draw = function() {
    ellipse(this.x,this.y,14,14);
};


//prototype that makes the ball fall
Ball.prototype.ballDrop = function(){
        this.velocity += gravity;
        this.y += this.velocity;
};


//collision prototype *unfinished*
Ball.prototype.collision = function(){
};

//defines plinkoBall as a new ball    
var plinkoBall = new Ball(200,50);


//nested for loop that pushes new peg values into the empty array
for (var i = 0; i < rows; i++){
    for(var j = 0; j < i; j++){
        pegs.push(new Pegs(-16*j+-10+32*i,-21*j+344));
           
        }
        
    }
    


draw = function() {
    background(240, 228, 168);
    fill(255, 255, 255);
    
    //for loop that actually displays the pegs
    for (var k = 0; k < pegs.length; k++){
        pegs[k].draw();
    }
    
    //for loop that draws the ball falling
    for (var m = 0; m < Balls.length; m++){
        Balls[m].ballDrop();
        fill(255, 0, 0);
        Balls[m].draw();
    }
    
    //for loop for score boxes
    for ( var s = 0; s < 8; s++){
        fill(0, 0, 0);
        rect(56*s,375,5,36);
    }

    fill(255, 0, 0);
    

};
//when the mouse is clicked, push a new plinkoBall into the empty Balls array
mouseClicked = function(){
        Balls.push(plinkoBall = new Ball(200,50));
};
