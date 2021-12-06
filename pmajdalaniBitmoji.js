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
    noStroke();
    fill(230, 7, 7); // color for shirt
    rect(resize/100*-85+bitmojiX,resize/100*78+bitmojiY,resize/100*174,resize/100*157,40); // shirt
};
var drawBitmoji = function(bitmojiX,bitmojiY,resize){
    drawHead(bitmojiX,bitmojiY,resize);
    drawBody(bitmojiX,bitmojiY,resize);
};
