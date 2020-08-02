var form, name;
var bg , bg2 , bg3 , bg4 , bg5 , bg6 ,bg7, final;
var gameState=0;
var score=0;

function preload(){
    bg = loadImage("bgImg.jpg");
    bg2 = loadImage("bgImg2.jpg");
    bg3 = loadImage("bgImg3.jpg");
    bg4 = loadImage("bgImg4.jpg");
    bg5 = loadImage("bgImg5.jpg");
    bg6 = loadImage("bgImg6.jpg");
    bg7 = loadImage("bgImg7.jpg");
    final = loadImage("bgImgFinal.jpg");
}

function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth,displayHeight)
    form = new Form();
}
function draw(){
    background(bg);
    form.display();
    if(gameState === 1){
        background(bg2);
        form.hide();
        form.firstQDisplay();
    }
    if(gameState === 2){
        background(bg3);
        form.firstSectionHide();
        form.secondQDisplay();
    }
    if(gameState === 3){
        background(bg4)
        form.secondSectionHide();
        form.thirdQDisplay();
    }
    if(gameState === 4){
        background(bg5)
        form.thirdSectionHide();
        form.fourthQDisplay();
    }
    if(gameState === 5){
        background(bg6)
        form.fourthSectionHide();
        form.fifthQDisplay();
    }
    if(gameState === 6){
        background(bg7)
        form.fifthSectionHide();
        form.sixthQDisplay();
    }
    if(gameState === 7){
        background(final);
        form.sixthSectionHide();
        if(score < 9){
            form.lowscore1();
        }
        if(score > 9 && score <=18){
            form.lowscore2();
        }
        if(score>18 && score < 27){
            form.mediumscore();
        }
        if(score > 27){
            form.highscore();
        }
    }
}