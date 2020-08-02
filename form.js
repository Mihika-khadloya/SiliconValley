class Form{
    constructor(){
        this.title = createElement("h1")
        this.extra = createElement("h3");
        this.start = createButton("START ->")
        
        this.expl = createElement("h3")

        this.firstQuestion = createElement("h2");
        this.first1 = createButton("Not at all");
        this.first2 = createButton("Some days");
        this.first3 = createButton("Yes..A lot");
        this.first4 = createButton("Yes..Every single day");

        this.secondQuestion = createElement("h2");
        this.second1 = createButton("Not at all");
        this.second2 = createButton("Some days");
        this.second3 = createButton("Yes..A lot");
        this.second4 = createButton("Yes..Every single day");

        this.thirdQuestion = createElement("h2");
        this.third1 = createButton("Not at all");
        this.third2 = createButton("Some days");
        this.third3 = createButton("Yes..A lot");
        this.third4 = createButton("Yes..Every single day");

        this.fourthQuestion = createElement("h2");
        this.fourth1 = createButton("Not at all");
        this.fourth2 = createButton("Some days");
        this.fourth3 = createButton("Yes..A lot");
        this.fourth4 = createButton("Yes..Every single day");

        this.fifthQuestion = createElement("h2");
        this.fifth1 = createButton("Not at all");
        this.fifth2 = createButton("Some days");
        this.fifth3 = createButton("Yes..A lot");
        this.fifth4 = createButton("Yes..Every single day");

        this.sixthQuestion = createElement("h2");
        this.sixth1 = createButton("Not at all");
        this.sixth2 = createButton("Some days");
        this.sixth3 = createButton("Yes..A lot");
        this.sixth4 = createButton("Yes..Every single day");

        this.lowscore1title = createElement("h1");
        this.lowscore1text = createElement("h2");

        this.lowscore2title = createElement("h1");
        this.lowscore2text = createElement("h2");

        this.mediumscoretitle = createElement("h1");
        this.mediumscoretext = createElement("h2");

        this.highscoretitle = createElement("h1");
        this.highscoretext = createElement("h2");

    }
    hide(){
        
        this.start.hide();
        this.title.html("UNLOCK THE STATE OF YOUR MIND!");
        this.title.position(displayWidth/4, displayHeight/10);
        this.extra.hide();
        this.expl.html("This is a set of 6 questions. You will have to answer all of them with complete honesty to accurately become aware about the present state of your mind.")
        this.expl.position(displayWidth/10.7, displayHeight/6.8);
    }
    display(){
        this.title.html("If you're feeling low/sad/anxious, we are here to help you!");
        this.title.position(displayWidth/5,displayHeight/4);
        this.extra.html("*This is a confidential app. It is made only to help the people in need.")
        this.extra.position(displayWidth/4,displayHeight/3.2);
        this.start.position(displayWidth/1.7,displayHeight/2);
        this.start.mousePressed(()=>{
            form.hide();
            form.firstQDisplay();
            gameState = 1
             
        })
    }
    firstQDisplay(){
        this.firstQuestion.html("1) Have you noticed any decrease in interest or pleasure in doing things you used to like a lot?")
        this.firstQuestion.position(displayWidth/7.5, displayHeight/4);
        this.first1.position(displayWidth/6,displayHeight/2.8);
        this.first1.mousePressed(()=>{
            score+=0
            gameState = 2
            form.firstSectionHide();
            form.secondQDisplay();
        })
        this.first2.position(displayWidth/6,displayHeight/2.5);
        this.first2.mousePressed(()=>{
            score+=2
            gameState = 2
            form.firstSectionHide();
            form.secondQDisplay();
        })
        this.first3.position(displayWidth/6,displayHeight/2.3);
        this.first3.mousePressed(()=>{
            score+=4
            gameState = 2
            form.firstSectionHide();
            form.secondQDisplay();
        })
        this.first4.position(displayWidth/6,displayHeight/2.1);
        this.first4.mousePressed(()=>{
            score+=6
            gameState = 2
            form.firstSectionHide();
            form.secondQDisplay();
        })
    }
    firstSectionHide(){
        this.firstQuestion.hide();
        this.first1.hide();
        this.first2.hide();
        this.first3.hide();
        this.first4.hide();
        this.title.html("UNLOCK THE STATE OF YOUR MIND!");
        this.title.position(displayWidth/4, displayHeight/10);
    }
    secondQDisplay(){
        this.secondQuestion.html("2) Are you having trouble falling/staying asleep or oversleeping and feeling exhausted and lazy all the time?")
        this.secondQuestion.position(displayWidth/7.7, displayHeight/4);
        this.second1.position(displayWidth/6,displayHeight/2.8);
        this.second1.mousePressed(()=>{
            score+=0
            gameState = 3
            form.secondSectionHide();
            form.thirdQDisplay();
        })
        this.second2.position(displayWidth/6,displayHeight/2.5);
        this.second2.mousePressed(()=>{
            score+=2
            gameState = 3
            form.secondSectionHide();
            form.thirdQDisplay();
        })
        this.second3.position(displayWidth/6,displayHeight/2.3);
        this.second3.mousePressed(()=>{
            score+=4
            gameState = 3
            form.secondSectionHide();
            form.thirdQDisplay();
        })
        this.second4.position(displayWidth/6,displayHeight/2.1);
        this.second4.mousePressed(()=>{
            score+=6
            gameState =3
            form.secondSectionHide();
            form.thirdQDisplay();
        })
    }
    secondSectionHide(){
        this.secondQuestion.hide();
        this.second1.hide();
        this.second2.hide();
        this.second3.hide();
        this.second4.hide();
        this.title.html("UNLOCK THE STATE OF YOUR MIND!");
        this.title.position(displayWidth/4, displayHeight/10);
        
    }
    thirdQDisplay(){
        this.thirdQuestion.html("3) Do you think you feel less hungry nowadays / your appetite is poor / you are overeating?")
        this.thirdQuestion.position(displayWidth/7.5, displayHeight/4);
        this.third1.position(displayWidth/6,displayHeight/2.8);
        this.third1.mousePressed(()=>{
            score+=0
            gameState = 4
            form.thirdSectionHide();
            form.fourthQDisplay();
        })
        this.third2.position(displayWidth/6,displayHeight/2.5);
        this.third2.mousePressed(()=>{
            score+=2
            gameState = 4
            form.thirdSectionHide();
            form.fourthQDisplay();
        })
        this.third3.position(displayWidth/6,displayHeight/2.3);
        this.third3.mousePressed(()=>{
            score+=4
            gameState = 4
            form.thirdSectionHide();
            form.fourthQDisplay();
        })
        this.third4.position(displayWidth/6,displayHeight/2.1);
        this.third4.mousePressed(()=>{
            score+=6
            gameState = 4
            form.thirdSectionHide();
            form.fourthQDisplay();
        })
    }
    thirdSectionHide(){
        this.thirdQuestion.hide();
        this.third1.hide();
        this.third2.hide();
        this.third3.hide();
        this.third4.hide();
        this.title.html("UNLOCK THE STATE OF YOUR MIND!");
        this.title.position(displayWidth/4, displayHeight/10);
    }
    fourthQDisplay(){
        this.fourthQuestion.html("4) Do you feel bad about yourself - that you are a failure and have let yourself and your family down?")
        this.fourthQuestion.position(displayWidth/7.6, displayHeight/4);
        this.fourth1.position(displayWidth/6,displayHeight/2.8);
        this.fourth1.mousePressed(()=>{
            score+=0
            gameState = 5
            form.fourthSectionHide();
            form.fifthQDisplay();
        })
        this.fourth2.position(displayWidth/6,displayHeight/2.5);
        this.fourth2.mousePressed(()=>{
            score+=2
            gameState = 5
            form.fourthSectionHide();
            form.fifthQDisplay();
        })
        this.fourth3.position(displayWidth/6,displayHeight/2.3);
        this.fourth3.mousePressed(()=>{
            score+=4
            gameState = 5
            form.fourthSectionHide();
            form.fifthQDisplay();
        })
        this.fourth4.position(displayWidth/6,displayHeight/2.1);
        this.fourth4.mousePressed(()=>{
            score+=6
            gameState = 5
            form.fourthSectionHide();
            form.fifthQDisplay();
        })
    }
    fourthSectionHide(){
        this.fourthQuestion.hide();
        this.fourth1.hide();
        this.fourth2.hide();
        this.fourth3.hide();
        this.fourth4.hide();
        this.title.html("UNLOCK THE STATE OF YOUR MIND!");
        this.title.position(displayWidth/4, displayHeight/10);
    }
    fifthQDisplay(){
        this.fifthQuestion.html("5) Do you think that you are not able to concentrate on things like reading, writing, etc. like you used to be able to do earlier?")
        this.fifthQuestion.position(displayWidth/7.9, displayHeight/4);
        this.fifth1.position(displayWidth/6,displayHeight/2.8);
        this.fifth1.mousePressed(()=>{
            score+=0
            gameState = 6
            form.fifthSectionHide();
            form.sixthQDisplay();
        })
        this.fifth2.position(displayWidth/6,displayHeight/2.5);
        this.fifth2.mousePressed(()=>{
            score+=2
            gameState = 6
            form.fifthSectionHide();
            form.sixthQDisplay();
        })
        this.fifth3.position(displayWidth/6,displayHeight/2.3);
        this.fifth3.mousePressed(()=>{
            score+=4
            gameState = 6
            form.fifthSectionHide();
            form.sixthQDisplay();
        })
        this.fifth4.position(displayWidth/6,displayHeight/2.1);
        this.fifth4.mousePressed(()=>{
            score+=6
            gameState = 6
            form.fifthSectionHide();
            form.sixthQDisplay();
        })
    }
    fifthSectionHide(){
        this.fifthQuestion.hide();
        this.fifth1.hide();
        this.fifth2.hide();
        this.fifth3.hide();
        this.fifth4.hide();
        this.title.html("UNLOCK THE STATE OF YOUR MIND!");
        this.title.position(displayWidth/4, displayHeight/10);
    }
    sixthQDisplay(){
        this.sixthQuestion.html("6) Do you feel lonely even when seated in a gathering of family and friends?")
        this.sixthQuestion.position(displayWidth/7.9, displayHeight/4);
        this.sixth1.position(displayWidth/6,displayHeight/2.8);
        this.sixth1.mousePressed(()=>{
            score+=0
            gameState = 7
            form.sixthSectionHide();
        })
        this.sixth2.position(displayWidth/6,displayHeight/2.5);
        this.sixth2.mousePressed(()=>{
            score+=2
            gameState = 7
            form.sixthSectionHide();;
        })
        this.sixth3.position(displayWidth/6,displayHeight/2.3);
        this.sixth3.mousePressed(()=>{
            score+=4
            gameState = 7
            form.sixthSectionHide();
        })
        this.sixth4.position(displayWidth/6,displayHeight/2.1);
        this.sixth4.mousePressed(()=>{
            score+=6
            gameState = 7
            form.sixthSectionHide();
        })
    } 
    sixthSectionHide(){
        this.sixthQuestion.hide();
        this.sixth1.hide();
        this.sixth2.hide();
        this.sixth3.hide();
        this.sixth4.hide();
        this.expl.hide();
        this.title.html("YOUR SCORE IS "+(score)+" out of 36!");
        this.title.position(displayWidth/2.8, displayHeight/10);
    }
    lowscore1(){
        this.lowscore1title.html("You are mentally healthy!");
        this.lowscore1title.position(displayWidth/2.8, displayHeight/4);
        this.lowscore1text.html("You are perfectly alright but even if you feel some kind of sadness, try to talk it out to your loved ones, try to engage yourself in different activities and admire the miracles of nature :)")
        this.lowscore1text.position(displayWidth/15,displayHeight/2);
    }
    lowscore2(){
        this.lowscore2title.html("You are suffering from mild sadness...");
        this.lowscore2title.position(displayWidth/2.8, displayHeight/4);
        this.lowscore2text.html("If you think more about it, it will slowly conquer your entire mind and destroy you! Try to always stay positive and engage yourself in creative tasks like painting, singing, etc.Try planning out your day and staying productive.")
        this.lowscore2text.position(displayWidth/20,displayHeight/2);
    }
    mediumscore(){
        this.mediumscoretitle.html("You are suffering from extreme sorrow...");
        this.mediumscoretitle.position(displayWidth/2.8, displayHeight/4);
        this.mediumscoretext.html("You should consult a doctor/therapist for treating and handling this case. You should also try meditating for a peace and calm sensation and read the scriptures written by our ancestors. It will promote purity and peacefulness in your life and will surely reduce this sorrow.Don't worry, you'll be fine!")
        this.mediumscoretext.position(displayWidth/27,displayHeight/2);
    }
    highscore(){
        this.highscoretitle.html("You are suffering from depression!");
        this.highscoretitle.position(displayWidth/2.8, displayHeight/4);
        this.highscoretext.html("You should immediately consult a doctor/therapist before you take any action because if there is any further delay, the situation may get even worse.Don't worry, you'll be fine :)")
        this.highscoretext.position(displayWidth/20,displayHeight/2);
    }

    

}