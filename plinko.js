//12/17 - Final Commit

//Lattuada Bitmoji
var drawBitmojiHead = function(bitX,bitY,bitHeight) {
    
    //head
    fill(198, 134, 69);
    ellipse(bitX-(bitHeight/100*40),bitY-(bitHeight/100*50),(bitHeight/100*42),(bitHeight/100*42));//shape
    stroke(0, 0, 0);
    arc(bitX-(bitHeight/100*40),bitY-(bitHeight/100*40),(bitHeight/100*25),(bitHeight/100*25),24,151);//chin
    fill(0, 0, 0);
    //headgear
    fill(0, 0, 0);
    arc(bitX-(bitHeight/100*58),bitY-(bitHeight/100*50),(bitHeight/100*25),(bitHeight/100*25),93,263);//leftside
    arc(bitX-(bitHeight/100*21),bitY-(bitHeight/100*50),(bitHeight/100*25),(bitHeight/100*25),273,450);//rightside
    rect(bitX-(bitHeight/100*42),bitY-(bitHeight/100*31),(bitHeight/100*5),(bitHeight/100*3));//chinstrap
    //hair
    arc(bitX-(bitHeight/100*41),bitY-(bitHeight/100*68),(bitHeight/100*28),(bitHeight/100*9),159,368);//top
    arc(bitX-(bitHeight/100*55),bitY-(bitHeight/100*63),(bitHeight/100*8),(bitHeight/100*9),141,305);//leftside
    arc(bitX-(bitHeight/100*25),bitY-(bitHeight/100*64),(bitHeight/100*12),(bitHeight/100*7),243,428);//rightside
    //face
    fill(255, 255, 255);//eye color
    ellipse(bitX-(bitHeight/100*46),bitY-(bitHeight/100*53),(bitHeight/100*9),(bitHeight/100*8));//left eye
    fill(99, 69, 12);
    ellipse(bitX-(bitHeight/100*46),bitY-(bitHeight/100*51),(bitHeight/100*2),(bitHeight/100*2));//pupill
    fill(255,255,255);
    ellipse(bitX-(bitHeight/100*32),bitY-(bitHeight/100*53),(bitHeight/100*9),(bitHeight/100*8));//right eye
    fill(99, 69, 12);
    ellipse(bitX-(bitHeight/100*32),bitY-(bitHeight/100*51),(bitHeight/100*2),(bitHeight/100*2));//pupill
    fill(0, 0, 0);
    arc(bitX-(bitHeight/100*48),bitY-(bitHeight/100*59),(bitHeight/100*13),(bitHeight/100*4),237,394);//eyebrow
    arc(bitX-(bitHeight/100*29),bitY-(bitHeight/100*59),(bitHeight/100*13),(bitHeight/100*4),172,307);//eyebrow
    noFill();
    fill(198, 134, 69);
    ellipse(bitX-(bitHeight/100*39),bitY-(bitHeight/100*46),(bitHeight/100*6),(bitHeight/100*8));//nose
    ellipse(bitX-(bitHeight/100*39),bitY-(bitHeight/100*43),(bitHeight/100*7),(bitHeight/100*5));//top of nose
    noFill();
    ellipse(bitX-(bitHeight/100*26),bitY-(bitHeight/100*46),(bitHeight/100*1),(bitHeight/100*0));//dot
    stroke(156, 0, 83);
    fill(0, 0, 0);
    ellipse(bitX-(bitHeight/100*39),bitY-(bitHeight/100*36),(bitHeight/100*10),(bitHeight/100*4));//mouth

};
var drawBitmojiBody = function (bitX,bitY,bitHeight) {
    //shirt
    fill(0,0,0);
    stroke(0, 0, 0);
    quad(bitX-(bitHeight/100*40),bitY-(bitHeight/100*27),bitX-(bitHeight/100*41),bitY-(bitHeight/100*3),bitX-(bitHeight/100*7),bitY-(bitHeight/100*5),bitX-(bitHeight/100*15),bitY-(bitHeight/100*27));
quad(bitX-(bitHeight/100*38),bitY-(bitHeight/100*27),bitX-(bitHeight/100*39),bitY-(bitHeight/100*3),bitX-(bitHeight/100*66),bitY-(bitHeight/100*5),bitX-(bitHeight/100*63),bitY-(bitHeight/100*26));
    fill(250, 250, 250);
    textSize((bitHeight/100*10));

    text("KL",bitX-(bitHeight/100*45),bitY-(bitHeight/50*10));

};
var drawBitmojiKevin = function(bitX,bitY,bitHeight) {
    drawBitmojiHead(bitX,bitY,bitHeight);
    drawBitmojiBody(bitX,bitY,bitHeight);
};

//Majdalani Bitmoji
var drawHead = function(bitmojiX,bitmojiY,resize){
    noStroke();
    fill(255, 219, 172); // skin tone for head
    ellipse(bitmojiX,bitmojiY,resize/100*94,resize/100*111); //head
    fill(255, 255, 255); // white for eye
    stroke(0, 0, 0);
    ellipse(resize/100*-16+bitmojiX,resize/100*-20+bitmojiY,resize/100*14,resize/100*14); // left eye
    ellipse(resize/100*17+bitmojiX,resize/100*-20+bitmojiY,resize/100*14,resize/100*14); // right eye
    noStroke();
    fill(82, 54, 6); // brown for pupil
    ellipse(resize/100*-16+bitmojiX,resize/100*-20+bitmojiY,resize/100*6,resize/100*6); //left pupil
    ellipse(resize/100*17+bitmojiX,resize/100*-20+bitmojiY,resize/100*6,resize/100*6); // right pupil
    stroke(0, 0, 0);
    fill(255, 219, 172); // skin tone for ears
    arc(resize/100*-45+bitmojiX, resize/100*-0+bitmojiY, resize/100*21, resize/100*27, 88, 270); // left ear
    arc(resize/100*45+bitmojiX, resize/100*0+bitmojiY, resize/100*21, resize/100*27, -90, 92); // right ear
    noStroke();
    stroke(0, 0, 0); // line for nose 
    fill(255, 219, 172); // skin tone for nose
    triangle(resize/100*9+bitmojiX,resize/100*8+bitmojiY,resize/100*0+bitmojiX,resize/100*-20+bitmojiY,resize/100*-7+bitmojiX,resize/100*8+bitmojiY); // nose
    noStroke();
    fill(28, 19, 0); //color for sideburns
    rect(resize/100*-45+bitmojiX,resize/100*-33+bitmojiY,resize/100*8,resize/100*46); // left sideburn
    rect(resize/100*39+bitmojiX,resize/100*-33+bitmojiY,resize/100*8,resize/100*46); // right sideburn
    fill(10, 10, 10); // color for hat
    arc(resize/100*1+bitmojiX, resize/100*-30+bitmojiY, resize/100*93, resize/100*101, 184, 358); // hat
    rect(resize/100*-39+bitmojiX,resize/100*-46+bitmojiY,resize/100*118,resize/100*15); // brim of hat
    fill(255, 255, 255); //color for hat design
    rect(resize/100*-5+bitmojiX,resize/100*-77+bitmojiY,resize/100*3,resize/100*12); // hat design #1
    rect(resize/100*1+bitmojiX,resize/100*-77+bitmojiY,resize/100*3,resize/100*12); // hat design #2
    rect(resize/100*9+bitmojiX,resize/100*-61+bitmojiY,resize/100*12,resize/100*3); // hat design #3
    rect(resize/100*9+bitmojiX,resize/100*-55+bitmojiY,resize/100*12,resize/100*3); // hat design #4
    rect(resize/100*1+bitmojiX,resize/100*-49+bitmojiY,resize/100*3,resize/100*12); // hat design #5
    rect(resize/100*-5+bitmojiX,resize/100*-49+bitmojiY,resize/100*3,resize/100*12); // hat design #6
    rect(resize/100*-21+bitmojiX,resize/100*-61+bitmojiY,resize/100*12,resize/100*3); // hat design #7
    rect(resize/100*-21+bitmojiX,resize/100*-55+bitmojiY,resize/100*12,resize/100*3); // hat design #8
    fill(255, 219, 172);
    rect(resize/100*-19+bitmojiX,resize/100*53+bitmojiY,resize/100*38,resize/100*44); // neck
    fill(28, 19, 0); // color for beard
    arc(resize/100*1+bitmojiX, resize/100*13+bitmojiY, resize/100*92, resize/100*95, 1, 180); // beard
    fill(255, 250, 250); // white for mouth
    arc(resize/100*0+bitmojiX, resize/100*21+bitmojiY, resize/100*50, resize/100*51, 1, 180); // mouth
    stroke(0, 0, 0); //black for line
    line(resize/100*-22+bitmojiX, resize/100*32+bitmojiY, resize/100*21+bitmojiX, resize/100*32+bitmojiY); // teeth #1
    line(resize/100*-14+bitmojiX, resize/100*43+bitmojiY, resize/100*-14+bitmojiX, resize/100*20+bitmojiY); // teeth #2
    line(resize/100*0+bitmojiX, resize/100*46+bitmojiY, resize/100*0+bitmojiX, resize/100*20+bitmojiY); // teeth #3
    line(resize/100*12+bitmojiX, resize/100*47+bitmojiY, resize/100*12+bitmojiX, resize/100*20+bitmojiY); // teeth #4
};
var drawBody = function(bitmojiX,bitmojiY,resize){
    fill(230, 7, 7); // color for shirt
    rect(resize/100*-85+bitmojiX,resize/100*78+bitmojiY,resize/100*174,resize/100*157,40); // shirt
};
var drawBitmojipeter = function(bitmojiX,bitmojiY,resize){
    drawHead(bitmojiX,bitmojiY,resize);
    drawBody(bitmojiX,bitmojiY,resize);
};

//variables
var gravity = 0.06; // speed at which the ball drops ideal speed = 0.06
var pegs = []; //empty array for pegs
var balls = []; // empty array for balls
var rows = 13; //number of rows *KEEP AT 13*
var slots = [];//array of slots
var currentScene = 1;
var stillPlaying = true;
var ballColor = color(207, 15, 27);//this gets changed
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

//  slot constuctor function
var Slot = function(position){
    this.position = position;
    this.x = 56*position;
    this.center = this.x + 3.5; //center of slot
    this.y = 375;
    this.height = 36;
    this.width = 7;
    this.radi = this.height/2;
};

// prototype that draws the slots at bottom
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
};

//prototype that draws the Ball
Ball.prototype.draw = function() {
    fill(this.color);
    ellipse(this.x,this.y,this.width,this.height);
};

//prototype that makes the ball fall
Ball.prototype.ballDrop = function(){
    if (this.isFalling) {
        //continues to drop ball
        this.velocity += gravity;
        this.y += this.velocity; 
        //prevents ball from going out of bounds
        if (this.x < 30) {
            this.direction = + random(1,3);
        } else if (this.x > 370) {
            this.direction = - random(1,3);
        }
        this.x += this.direction;
        
    }
};

//prototype checks balls final x position to give points
Ball.prototype.checkScore = function () {
    if (this.y >= 390 && this.y <= 400){
        this.y = 401;
        //checks ball coordinates at bottom of screen
        if(this.x >= 0 && this.x <= 59){
            score = score + 5*10;
        }
        else if (this.x >= 60 && this.x <= 115){
            score = score + 5*3;
        }
        else if(this.x >= 115 && this.x <= 171){
            score = score + 5*1.5;
        }
        else if(this.x >= 172 && this.x <= 227){
            score = score + 5*1;
        }
        else if(this.x >= 228 && this.x <= 283){
            score = score + 5*1.5;
        }
        else if(this.x >= 284 && this.x <= 400){
            score = score + 5*3;
        }
        else if(this.x >= 343 && this.x <= 393){
            score = score + 5*10;
        }
    }
};

//pegCollision prototype
Ball.prototype.pegCollision = function(peg){
    if ((peg.x >= (this.x - 10) && peg.x <= (this.x + 10)) &&
        (peg.y >= (this.y - 10) && peg.y <= (this.y + 10))) {
        //moves ball either to left or right
        if(this.x < peg.x) {
            this.direction = -random(1,3);
        }else {
            this.direction = random(1,3);
        }
    }
};

//slotCollision prototype 
Ball.prototype.slotCollision = function(slot){
    if ((slot.center >= (this.x - 10)) && (slot.center <= (this.x + 10)) && 
        (slot.y <= (this.y + 10))) {
        //moves ball either to left or right
        if(this.x < slot.center) {
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

//function draws the game & controls gameplay
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
        //drops ball, displays the balls falling, and checks score
        balls[b].ballDrop();
        balls[b].draw();
        balls[b].checkScore();
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
    width: 150,
    label: "Play",
    onClick: function() {
        currentScene = 3;
        drawGame();
    }
});

//ball color selection screen
var drawColor = function () {
    currentScene = 2;
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
    fill(ballColor);
    ellipse(200,275,75,75);
};

//button brings player to color choose screen
var startColor = new Button({
    x: 120,
    y: 325,
    width: 150,
    label: "Select Color",
    onClick: function() {
        currentScene = 2;
        drawColor();
    }
});

//start screen
var drawHome = function () {
    currentScene = 1;
    background(44, 222, 222);
    fill(144, 50, 237);
    textSize(85);
    text("|-Plinko-|", 37, 5);
    textSize(16);
    text("|Try to get the most money!|", 100, 175); 
    text("|Pay $5 to drop 1 ball, for a chance to win big!|", 37, 192);
    textSize(20);
    text("By Peter Majdalani & Kevin Lattuada", 40, 115);
    drawBitmojipeter(55,265,50);
    drawBitmojiKevin(400,345,160);
    startColor.draw();
};

// switches between scene based on scene number
draw = function() {
    if (currentScene === 1) {
        drawHome();
    } else if (currentScene ===2) {
        drawColor();
    }else if (stillPlaying) {
        drawGame();
    } 
};    

//handles all mouse click events
mouseClicked = function(){
    if (currentScene === 1) {
        startColor.handleMouseClick();    
    } else if (currentScene === 2) {
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
    } else if (currentScene === 3) {
        balls.push(new Ball(mouseX,50,ballColor));
		score = score - 5;			
    }
};