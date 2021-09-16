
var readlineSync = require('readline-sync');
var username=readlineSync.question("Enter your name ");

console.log("Welcome "+username +" in this Cricket Quiz")
console.log("-------------------------------------")
console.log("Level One");
console.log("Score at least 5 to qualify for next level");
console.log();
var scoreLevel1=0;

function play(question,answer){
  var currentAnswer = readlineSync.question(question);
  if(currentAnswer.toUpperCase()===answer.toUpperCase()){
    scoreLevel1++;
    console.log("Your are right!");
  }else{
    console.log("You are wrong!");
  }
  console.log("Current score: "+scoreLevel1)
  console.log("-----------------------")
}

var questionOne={
  question:"How many centuries Sachin has scored in international cricket?",
  answer:"100"
}


var questionTwo={
  question:"How many times Australia won Cricket World cup?",
  answer:"5"
}


var questionThree={
  question:"What is the highest individual score till date in Test cricket?",
  answer:"400"
}

var questionFour={
  question:"Who won the first ever Cricket World Cup in 1975?",
  answer:"West Indies"
}

var questionFive={
  question:"Who won the first ever T20 Cricket World Cup in 2007?",
  answer:"India"
} 

var questionSix={
  question:"How long is the wicket on a cricket pitch?(in yards)",
  answer:"22"
} 

var questionSeven={
  question:"Who did England beat in the final of the 2019 Cricket World Cup?",
  answer:"New Zealand"
} 



var questionsLevel1=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven];

for(var i=0;i<questionsLevel1.length;++i){
  var currentQuestion=questionsLevel1[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Your final score for Level 1 is:"+scoreLevel1);
console.log();
console.log();
console.log();

if(scoreLevel1>=5){
  console.log("Congrats!!! You are qualified for Level 2");
  console.log()
  console.log("-------------------------------------------------------------");
  console.log();
  var scoreLevel2=0;

  function play(question,answer){
  var currentAnswer = readlineSync.question(question);
  if(currentAnswer.toUpperCase()===answer.toUpperCase()){
    scoreLevel2++;
    console.log("Your are right!");
  }else{
    console.log("You are wrong!");
  }
  console.log("Current score: "+scoreLevel2)
  console.log("-----------------------")
}
  var questionEight={
  question:"Which fast bowler has taken the most test wickets?",
  answer:"James Anderson"
  } 

   var questionNine={
  question:"Who is the first batsman to cross 10,000 runs in tests?",
  answer:"Sunil Gavaskar"
  } 

   var questionTen={
  question:"Who is the first batsman to cross 10,000 runs in ODI?",
  answer:"Sachin Tendulkar"
  } 

   var questionEleven={
  question:"Who bowled the fastest delivery ever of 100.2mph?",
  answer:"Shoaib Akhtar"
  } 

  var questionTwelve={
  question:"Which national team are called “Baggy Greens?",
  answer:"Australia"
  } 

  var questionThirteen={
  question:"What are the small pieces of wood on top of the stumps called?",
  answer:"Bails"
  } 

   var questionFourteen={
  question:"What does LBW stand for?",
  answer:"Leg Before Wicket"
  } 

   var questionFifteen={
  question:" Who was the Indian Captain when India won the Cricket World Cup in 1983?",
  answer:"Kapil Dev"
  } 
var questionsLevel2=[questionEight,questionNine,questionTen,questionEleven,questionTwelve,questionThirteen,questionFourteen,questionFifteen];



for(var i=0;i<questionsLevel2.length;++i){
  var currentQuestion=questionsLevel2[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Congrats!!!Your score for level2 is:"+scoreLevel2);
console.log("Thanks for participating");




}else{
  console.log("Sorry!!! You did not qualify for Level 2");
}