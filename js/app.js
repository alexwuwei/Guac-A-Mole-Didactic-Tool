var questionsAnswerArray = [];
var globalQuestionStringTracker = 0;
var globalRightAnswerTracker = 0;
var globalWrongAnswerOneTracker = 0;
var globalWrongAnswerTwoTracker = 0;
var globalWrongAnswerThreeTracker = 0;
var globalCatagoryTracker = 0;

function QuestionAnswer(questionString, rightAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, category) {
  this.questionString = questionString;
  this.rightAnswer = rightAnswer;
  this.wrongAnswerOne = wrongAnswerOne;
  this.wrongAnswerTwo = wrongAnswerTwo;
  this.wrongAnswerThree = wrongAnswerThree;
  this.category = category;
  this.rightAnswerCounter = 0;
  this.wrongAnswerCounter = 0;
  this.questionDisplayCounter = 0;
};


questionObjectArray = [];
totalQuestionsAnsweredCounter = 0;
questionsArray = ['What is the capital of Ireland?','Which country has the largest muslim population?','The North Atlantic current brings warm waters from the tropics to the west coast of which continent?','What is the capital city of New Mexico?','What is the biggest mountain in the continental US?','Burj Khalifa is a skyscraper in which city?','Which city was the imperial capital of Japan before Tokyo?','Which African mainland country lies next to Madagascar?','Which country has the lowest population density of any country in Europe?','What is the capital of Washington State?','______ are many books about JavaScript.','The ______ taught us a few new tricks.','There are ______ many cooks in the kitchen.', 'My parents ______ from Guatemala over 40 years ago.','Fatigue is one ______ of lack of sleep.','______ starting to get on my nerves.', 'Please, ______ my apology.','The police interrogation ______ some revealing details about the crime.','Chickens ______ eggs.','I need to take a ______.', 'When a gas is turned into a liquid, the process is called______.','The sun\'s ________  is easily visible only during a total solar eclipse?','Yeast, used in making pizza is a _____.', 'How long around is the Earth\'s equator?', 'What is the speed of sound?','At what temperature, in fahrenheit,  does water freeze?','Which of the following is used in pencils?','What is the name of the highest mountain on Earth?','What is the name of the largest ocean on Earth?','Which is hotter, the center of the Earth, or the surface of the Sun?',' There are ten houses on the street. Three people live in each house. How many people live on the street?',' It takes Matt four hours to mow two lawns. How many lawns can he mow in ten hours?','20 = 3x + 8; x = ?','increase 5 by 40%','A man\'s regular pay is $3 per hour up to 40 hours. Overtime is twice the payment for regular time. If he was paid $168, how many hours overtime did he work?',' Items bought by a trader for $80 are sold for $100. The profit expressed as a percentage of cost price is','Which of the following is NOT a prime number?','What is the simple interest earned on $10 000 invested for 3 months at a rate of 5% per annum?','A man bought a shirt at a sale.  He saves $30 on the normal price when he paid $120 for the shirt. What was the percentage discount on the shirt?',' If an increase of 20% will change the price of an  item to $480, what is the original price of the item?'];
rightAnswerArray = ['Dublin', 'Indonesia', 'Europe', 'Santa Fe', 'Mount Whitney', 'Dubai', 'Kyoto', 'Mozambique', 'Iceland', 'Olympia', 'There', 'Principal', 'too', 'emigrated', 'effect', 'You\'re', 'accept', 'elicited', 'lay', 'b r e a k', 'condensation', 'corona', 'fungus', '24,901 miles', '767 m.p.h.', '32 degrees', 'graphite', 'Mt. Everest', 'The Pacific', 'The Earth', '30', 'Five lawns', '4', '7', '8', '25\%', '21', '125', '20', '400'];

wrongAnswerOneArray = ['Brussels', 'Mexico', 'Asia', 'Albuquerque', 'Mount McKinley', 'Adelaide', 'Osaka', 'Liberia', 'Finland', 'Seattle', 'Their', 'principle', 'two', 'immigrated', 'affect', 'Yours', 'except', 'illicit', 'lie', 'brake', 'evaporation', 'core', 'seed', '34,901 miles', '667 m.p.h.', '31degrees', 'aluminum', 'Mt. Neverest', 'The Atlantic', 'The Sun', '20', 'Two lawns', '3', '45', '28', '20%', '11', '100', '25', '432'];

wrongAnswerTwoArray = ['Belfast','Iran','America','Las Cruces','Mount Rainier','Kyoto','Nagoya','Nigeria','Sweden','Walla Walla', 'They\'re','principles','to','emigrate','affects','Your','exempt', 'elicit','lied','broke','deposition','spots','bacteria','14,901 miles','867 m.p.h.','30 degrees','silicon','Mt. Cleverest','The Indian','They are equally hot','10',' Ten lawns','2','9','16','2.5','41','500','80','384'];

wrongAnswerThreeArray = ['Rio De Janeiro','Saudi Arabia','Africa','Farmington','Mount Shasta','Mexico City','Hiroshima','South Africa','Norway','Spokane','There\'s','principals','tutu','immigrate','effects','Youre','accepts','illicited','layed','brakes','appreciation','nose','virus','44,901 miles','567 m.p.h.','29 degrees','charcoal','Mt. Endevourest','The Arctic','Neither are hot','7','Three lawns','6','35','12','15','31','200','45','320'];

categoryArray = ['Geography','Geography','Geography','Geography','Geography','Geography','Geography','Geography','Geography','Geography', 'Grammar', 'Grammar', 'Grammar', 'Grammar', 'Grammar', 'Grammar', 'Grammar', 'Grammar', 'Grammar', 'Science', 'Science', 'Science', 'Science', 'Science', 'Science', 'Science', 'Science', 'Science', 'Science', 'Math', 'Math', 'Math', 'Math', 'Math', 'Math', 'Math', 'Math', 'Math', 'Math'];

var questionObjectJSONData = JSON.parse(localStorage.getItem('guacaResults'));
if (questionObjectJSONData) {
  questionObjectArray = questionObjectJSONData
} else {
for (var i = 0; i < questionsArray.length; i++) {
  questionObjectArray[i] = new QuestionAnswer(questionsArray[i], rightAnswerArray[i], wrongAnswerOneArray[i], wrongAnswerTwoArray[i], wrongAnswerThreeArray[i], categoryArray[i]);
}
}

var intervalStuff = setInterval(questionDisplay, 3500);

function questionDisplay () {
  if (totalQuestionsAnsweredCounter < 7) {
    var fullDivsCounter = 0;
    for (var i = 0; i < 9; i++) {
      var checkEmptyDiv = document.getElementById(i);
      if (checkEmptyDiv.childNodes.length === 0) {
        createDiv(i);
        console.log('questionTracker:' + questionTracker);
        return;
      } else {
        fullDivsCounter++;
      }
      // if (fullDivsCounter > 8) {
      //   //display game over div
      // }
    }
  } else {
    clearInterval(intervalStuff);
    youWin();
  }
}
var formTouched;
var questionNumber;
var questionTracker;
var randomNumberArray = [];
var globalFormTouched = [];
// if questionObjectArray[questionNumber].rightAnswer ==
function createDiv(divPosition) {
  console.log(divPosition);
  questionTracker = divPosition;
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'formDiv' + divPosition)
  var randomNumber = Math.floor((Math.random() * 39) + 1);
  randomNumberArray.push(randomNumber);
  for (var g = 0; g < randomNumberArray.length; g++) {
    if (randomNumberArray[g] == randomNumber) {
      var randomNumber = Math.floor((Math.random() * 39) + 1);
    }
  };
  questionNumber = randomNumber;
  questionObjectArray[randomNumber].questionDisplayCounter++
  localStorage.setItem('guacaResults', JSON.stringify(questionObjectArray));
  var divDeclare = 'questionForm' + divPosition;
  console.log(divDeclare);
  newDiv.innerHTML = '<form id="' + divDeclare + '" data-question="' + questionNumber + '"><legend>' + questionObjectArray[randomNumber].questionString + '<br></legend><input type="radio" name="rightAnswer" id="rightAnswer"  />' + questionObjectArray[randomNumber].rightAnswer + '<br><input type="radio" name="wrongAnswerOne" />' +  questionObjectArray[randomNumber].wrongAnswerOne + '<br><input type="radio" name="wrongAnswerTwo" />' +  questionObjectArray[randomNumber].wrongAnswerTwo + '<br><input type="radio" name="wrongAnswerThree" />' +  questionObjectArray[randomNumber].wrongAnswerThree + '<br><button name="submitAnswer">Submit</button></form>';
  newDiv.class = questionObjectArray[randomNumber].category;
  var divGoesInto = document.getElementById(divPosition);
  divGoesInto.appendChild(newDiv);
  formTouched = document.getElementById('questionForm' + divPosition);
  globalFormTouched.push(formTouched) ;
  //console.log("questionForm[" + divPosition + "]?"  + formTouched);
  formTouched.addEventListener('submit', getFormValue);
}

var formConcatenate;

function getFormValue (event) {
  event.preventDefault();
  // console.log("handler fired");
  // console.log(event.target);
  formConcatenate = 'questionForm' + questionTracker;
  //console.log('formConcatenate: ' + formConcatenate);
  var selection = document.getElementById(formConcatenate);
  var subSelection = document.getElementById('rightAnswer');
//  console.log('selection: ' + selection);
//for (var h = 0; h < globalFormTouched.length; h++) {
  //console.log('globalFormTouched[h].rightAnswer: ' + event.target.rightAnswer.checked);
  var currentQuestion = event.target.dataset.question;
    if (event.target.rightAnswer.checked) {
      console.log(event.target.dataset.question);
      //var localFormTouched = globalFormTouched[h];
      questionObjectArray[currentQuestion].rightAnswerCounter++;
      totalQuestionsAnsweredCounter++;
      localStorage.setItem('guacaResults', JSON.stringify(questionObjectArray));
      event.target.innerHTML = '<br><br><br>   Correct!<br><br><br>';
      setTimeout(function () {event.target.remove();},2000);
      return;
    } else {
      console.log(event.target.dataset.question);
      // var localFormTouched = globalFormTouched[h];
      questionObjectArray[currentQuestion].wrongAnswerCounter++;
      totalQuestionsAnsweredCounter++;
      localStorage.setItem('guacaResults', JSON.stringify(questionObjectArray));
      event.target.innerHTML = '<br><br><br>   Incorrect!<br><br><br>'
      setTimeout(function () {event.target.remove();},2000);
      return;
    }
}
  function youWin () {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'youWin');
    var divGoesInto = document.getElementById('8');
    divGoesInto.innerHTML = '';
    newDiv.innerHTML = '<h3>Congratulations, and thanks for playing! Go check out your results, and see where you did best!</h3><br><button name="seeYourResults" id="resultsButton" >See your results</button>';
    divGoesInto.appendChild(newDiv);
    var seeResultsGrab = document.getElementById('resultsButton');
    seeResultsGrab.addEventListener('click', seeResultsHandle);
  }
  function youLose() {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'youLose');
    var divGoesInto = document.getElementById('8');
    divGoesInto.innerHTML = '';
    newDiv.innerHTML = '<h3>You lose (sorries). Go check out your results, and see where you need to improve</h3><br><button name="seeYourResults" >See your results</button>';
    divGoesInto.appendChild(newDiv);
  }


  function seeResultsHandle(event) {
    window.location = 'results.html';
  }
