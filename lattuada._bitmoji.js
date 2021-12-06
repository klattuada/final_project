//Bitmoji

background(44, 222, 222);

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

//function draws body
var drawBitmojiBody = function (bitX,bitY,bitHeight) {
    //shirt
    fill(0,0,0);
    stroke(0, 0, 0);
    quad(bitX-(bitHeight/100*40),bitY-(bitHeight/100*27),bitX-(bitHeight/100*41),bitY-(bitHeight/100*3),bitX-(bitHeight/100*7),bitY-(bitHeight/100*5),bitX-(bitHeight/100*15),bitY-(bitHeight/100*27));
quad(bitX-(bitHeight/100*38),bitY-(bitHeight/100*27),bitX-(bitHeight/100*39),bitY-(bitHeight/100*3),bitX-(bitHeight/100*66),bitY-(bitHeight/100*5),bitX-(bitHeight/100*63),bitY-(bitHeight/100*26));
    fill(250, 250, 250);
    textSize((bitHeight/100*10));
    text("KL",bitX-(bitHeight/100*45),bitY-(bitHeight/100*10));

};

var drawBitmoji = function(bitX,bitY,bitHeight) {
    
    drawBitmojiHead(bitX,bitY,bitHeight);
    drawBitmojiBody(bitX,bitY,bitHeight);
};

drawBitmoji(240,250,177);
