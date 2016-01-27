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
  // this.globalQuestionStringTracker = 0;
  // this.globalRightAnswerTracker = 0;
  // this.globalWrongAnswerOneTracker = 0;
  // this.globalWrongAnswerTwoTracker = 0;
  // this.globalWrongAnswerThreeTracker = 0;
  // this.globalCatagoryTracker = 0;

};

QuestionAnswer.prototype.rightAnswerCounter = 0;
QuestionAnswer.prototype.wrongAnswerCounter = 0;
QuestionAnswer.prototype.questionDisplayCounter = 0;

questionObjectArray = [];
totalQuestionsAnsweredCounter = 0;

// questionsArray = ['What is the capital of Ireland?','Which country has the largest muslim population?','The North Atlantic current brings warm waters from the tropics to the west coast of which continent?','What is the capital city of New Mexico?','What is the biggest mountain in the continental US?','Burj Khalifa is a skyscraper in which city?','Which city was the imperial capital of Japan before Tokyo?','Which African mainland country lies next to Madagascar?','Which country has the lowest population density of any country in Europe?','What is the capital of Washington State?','______ are many books on JavaScript.','The ______ taught us a few new tricks.','There are ______ many cooks in the kitchen.', 'My parents ______ from Guatemala over 40 years ago.','Fatigue is one ______ of lack of sleep.','______ starting to get on my nerves.', 'Please, ______ my apology.','The police interrogation ______ some revealing details about the crime.','Chickens ______ eggs.','I need to take a ______.', 'When a gas is turned into a liquid, the process is called______.','The sun’s ________  is easily visible only during a total solar eclipse?','Yeast, used in making pizza is a _____.','How long around is the Earth’s equator?','What is the speed of sound?','At what temperature, in fahrenheit,  does water freeze?','Which of the following is used in pencils?','What is the name of the highest mountain on Earth?','What is the name of the largest ocean on Earth?','Which is hotter, the center of the Earth, or the surface of the Sun?',' There are ten houses on the street. Three people live in each house. How many people live on the street?',' It takes Matt four hours to mow two lawns. How many lawns can he mow in ten hours?','20 = 3x + 8; x = ?','increase 5 by 40%','A man\'s regular pay is $3 per hour up to 40 hours. Overtime is twice the payment for regular time. If he was paid $168, how many hours overtime did he work?',' Items bought by a trader for $80 are sold for $100. The profit expressed as a percentage of cost price is','Which of the following is NOT a prime number?','What is the simple interest earned on $10 000 invested for 3 months at a rate of 5% per annum?','A man bought a shirt at a sale.  He saves $30 on the normal price when he paid $120 for the shirt. What was the percentage discount on the shirt?',' If an increase of 20% will change the price of an  item to $480, what is the original price of the item?']
//
// rightAnswerArray = [‘Dublin’, ‘Indonesia’, ‘Europe’, ’Santa Fe’, ‘Mount Whitney’, ‘Dubai’, ‘Kyoto’, ‘Mozambique’, ‘Iceland’, ‘Olympia’, ’There’, ‘Principal’, ’too’, ‘emigrated’, ‘effect’, ‘You\’re’, ‘accept’, ‘elicited’, ‘lay’, ‘b r e a k’, ‘condensation’, ‘corona’, ‘fungus’, ’24,901 miles’, ‘767 m.p.h.’, ’32 degrees’, ‘graphite’, ‘Mt. Everest’, ’The Pacific’, ’The Earth’, ’30’, ‘Five lawns’, ‘ 4’, ‘7’,  '8', ’25%’, ’21’, ‘125’, ’20’, ‘400’];
//
// wrongAnswerOneArray = [‘Brussels’, ‘Mexico’, ‘Asia’, ‘Albuquerque’, ‘Mount McKinley’, ‘Adelaide’, ‘Osaka’, ‘Liberia’, ‘Finland’, ’Seattle’, ’Their’, ‘principle’, ’two’, ‘immigrated’, ‘affect’, ‘Yours’, ‘except’, ‘illicit’, ‘lie’, ‘brake’, ‘evaporation’, ‘core’, ’seed’, ’34,901 miles’, ‘667 m.p.h.’, ’31degrees’, ‘aluminum’, ‘Mt. Neverest’, ’The Atlantic’, ’The Sun’, ’20’, ’Two lawns’, ‘3’, ’45’, ’28’, ’20%’, ’11’, ‘100’, ’25’, ‘432’];
//
// wrongAnswerTwoArray = ['Belfast','Iran','America','Las Cruces','Mount Rainier','Kyoto','Nagoya','Nigeria','Sweden','Walla Walla', 'They\'re','principles','to','emigrate','affects','Your','exempt', 'elicit','lied','broke','deposition','spots','bacteria','14,901 miles','867 m.p.h.','30 degrees','silicon','Mt. Cleverest','The Indian','They are equally hot','10',' Ten lawns','2','9','16','2.5','41','500','80','384'];
//
// wrongAnswerThreeArray = ['Rio De Janeiro','Saudi Arabia','Africa','Farmington','Mount Shasta','Mexico City','Hiroshima','South Africa','Norway','Spokane','There\'s','principals','tutu','immigrate','effects','Youre','accepts','illicited','layed','brakes','appreciation','nose','virus','44,901 miles','567 m.p.h.','29 degrees','charcoal','Mt. Endevourest','The Arctic','Neither are hot','7','Three lawns','6','35''12','15','31','200','45','320']
//
//  categoryArray = [‘Geography’,‘Geography’,‘Geography’,‘Geography’,‘Geography’,‘Geography’,‘Geography’,‘Geography’,‘Geography’,‘Geography’, ‘Grammar’, ‘Grammar’, ‘Grammar’, ‘Grammar’, ‘Grammar’, ‘Grammar’, ‘Grammar’, ‘Grammar’, ‘Grammar’, ‘Science’, ‘Science’, ‘Science’, ‘Science’, ‘Science’, ‘Science’, ‘Science’, ‘Science’, ‘Science’, ‘Science’, ‘Math’, ‘Math’, ‘Math’, ‘Math’, ‘Math’, ‘Math’, ‘Math’, ‘Math’, ‘Math’, ‘Math’];

questionObjectArray[0] = new QuestionAnswer ('What is the capital of Ireland?', 'Dublin', 'Brussels', 'Belfast', 'Rio De Janeiro', 'Geography');
questionObjectArray[1] = new QuestionAnswer ('Which country has the largest muslim population?', 'Indonesia', 'Mexico', 'Iran', 'Saudi Arabia', 'Geography');
questionObjectArray[2] = new QuestionAnswer ('The North Atlantic current brings warm waters from the tropics to the west coast of which continent?', 'Europe', 'Asia', 'America', 'Africa', 'Geography');
questionObjectArray[3] = new QuestionAnswer ('What is the capital city of New Mexico?', 'Santa Fe', 'Albuquerque', 'Las Cruces', 'Farmington', 'Geography');
questionObjectArray[4] = new QuestionAnswer ('What is the biggest mountain in the continental US?', 'Mount Whitney', 'Mount McKinley', 'Mount Rainier', 'Mount Shasta', 'Geography');
questionObjectArray[5] = new QuestionAnswer ('Burj Khalifa is a skyscraper in which city?', 'Dubai', 'Adelaide', 'Kyoto', 'Mexico City', 'Geography');
questionObjectArray[6] = new QuestionAnswer ('Which city was the imperial capital of Japan before Tokyo?', 'Kyoto', 'Osaka', 'Nagoya', 'Hiroshima', 'Geography');
questionObjectArray[7] = new QuestionAnswer ('Which African mainland country lies next to Madagascar?', 'Mozambique', 'Liberia', 'Nigeria', 'South Africa', 'Geography');
questionObjectArray[8] = new QuestionAnswer ('Which country has the lowest population density of any country in Europe?', 'Iceland', 'Finland', 'Sweden', 'Norway', 'Geography');
questionObjectArray[9] = new QuestionAnswer ('What is the capital of Washington State?', 'Olympia', 'Seattle', 'Walla Walla', 'Spokane', 'Geography');
questionObjectArray[10] = new QuestionAnswer ('______ are many books on JavaScript.', 'There', 'Their', 'They\'re', 'There\'s', 'Grammar');
questionObjectArray[11] = new QuestionAnswer ('The ______ taught us a few new tricks.', 'principal', 'principle', 'principles', 'principals', 'Grammar');
questionObjectArray[12] = new QuestionAnswer ('There are ______ many cooks in the kitchen.', 'too', 'two', 'to', 'tutu', 'Grammar');
questionObjectArray[13] = new QuestionAnswer ('My parents ______ from Guatemala over 40 years ago.', 'emigrated', 'immigrated', 'emigrate', 'immigrate', 'Grammar');
questionObjectArray[14] = new QuestionAnswer ('Fatigue is one ______ of lack of sleep.', 'effect', 'affect', 'affects', 'effects', 'Grammar');
questionObjectArray[15] = new QuestionAnswer ('______ starting to get on my nerves.', 'You\'re', 'Yours', 'Your', 'Youre', 'Grammar');
questionObjectArray[16] = new QuestionAnswer ('Please, ______ my apology.', 'accept', 'except', 'exempt', 'accepts', 'Grammar');
questionObjectArray[17] = new QuestionAnswer ('The police interrogation ______ some revealing details about the crime.', 'elicited', 'illicit', 'elicit', 'illicited', 'Grammar');
questionObjectArray[18] = new QuestionAnswer ('Chickens ______ eggs.', 'lay', 'lie', 'lied', 'layed','Grammar');
questionObjectArray[19] = new QuestionAnswer ('I need to take a ______.', 'break', 'brake', 'broke', 'brakes', 'Grammar');
questionObjectArray[20] = new QuestionAnswer ('When a gas is turned into a liquid, the process is called______.', 'condensation', 'evaporation', 'deposition', 'appreciation', 'Science');
questionObjectArray[21] = new QuestionAnswer ('The sun’s ________  is easily visible only during a total solar eclipse?', 'corona', 'core', 'spots', 'nose', 'Science');
questionObjectArray[22] = new QuestionAnswer ('Yeast, used in making pizza is a _____.','fungus', 'seed', 'bacteria', 'virus', 'Science');
questionObjectArray[23] = new QuestionAnswer ('How long around is the Earth’s equator?', '24,901 miles', '34,901 miles', '14,901 miles', '44,901 miles', 'Science');
questionObjectArray[24] = new QuestionAnswer ('What is the speed of sound?', '767 m.p.h.','667 m.p.h.','867 m.p.h.','567 m.p.h.','Science');
questionObjectArray[25] = new QuestionAnswer ('At what temperature, in fahrenheit,  does water freeze?', '32 degrees', '31 degrees', '30 degrees', '29 degrees', 'Science');
questionObjectArray[26] = new QuestionAnswer ('Which of the following is used in pencils?', 'Graphite', 'aluminum', 'silicon', 'charcoal', 'Science');
questionObjectArray[27] = new QuestionAnswer ('What is the name of the highest mountain on Earth?', 'Mt. Everest', 'Mt. Neverest', 'Mt. Cleverest', 'Mt. Endevourest', 'Science');
questionObjectArray[28] = new QuestionAnswer ('What is the name of the largest ocean on Earth?', 'The Pacific', 'The Atlantic', 'The Indian', 'The Arctic', 'Science');
questionObjectArray[29] = new QuestionAnswer ('Which is hotter, the center of the Earth, or the surface of the Sun?', 'The Earth', 'The Sun', 'They are equally hot', 'Neither are hot', 'Science');
questionObjectArray[30]=new QuestionAnswer (' There are ten houses on the street. Three people live in each house. How many people live on the street?','30','20','10','7','math');
questionObjectArray[31]=new QuestionAnswer (' It takes Matt four hours to mow two lawns. How many lawns can he mow in ten hours?','Five lawns', 'Two lawns',' Ten lawns','Three lawns','math');
questionObjectArray[32]=new QuestionAnswer ('20 = 3x + 8; x = ?','4','3','2','6','math');
questionObjectArray[33]=new QuestionAnswer ('increase 5 by 40%','7','45','9','35','math');
questionObjectArray[34]=new QuestionAnswer ('A man\'s regular pay is $3 per hour up to 40 hours. Overtime is twice the payment for regular time. If he was paid $168, how many hours overtime did he work?','8','28','16','12','math');
questionObjectArray[35]=new QuestionAnswer (' Items bought by a trader for $80 are sold for $100. The profit expressed as a percentage of cost price is','25%','20%','2.5','15','math')
questionObjectArray[36]=new QuestionAnswer ('Which of the following is NOT a prime number?','21','11','41','31','math');
questionObjectArray[37]=new QuestionAnswer ('What is the simple interest earned on $10 000 invested for 3 months at a rate of 5% per annum?','125','100','500','200','math');
questionObjectArray[38]=new QuestionAnswer ('A man bought a shirt at a sale.  He saves $30 on the normal price when he paid $120 for the shirt. What was the percentage discount on the shirt?','20','25','80','45','math');
questionObjectArray[39]=new QuestionAnswer (' If an increase of 20% will change the price of an  item to $480, what is the original price of the item?','400','432','384','320','math');
// questionsArray = ['What is the capital of Ireland?','Which country has the largest muslim population?','The North Atlantic current brings warm waters from the tropics to the west coast of which continent?','What is the capital city of New Mexico?','What is the biggest mountain in the continental US?','Burj Khalifa is a skyscraper in which city?','Which city was the imperial capital of Japan before Tokyo?','Which African mainland country lies next to Madagascar?','Which country has the lowest population density of any country in Europe?','What is the capital of Washington State?','______ are many books on JavaScript.','The ______ taught us a few new tricks.','There are ______ many cooks in the kitchen.', 'My parents ______ from Guatemala over 40 years ago.','Fatigue is one ______ of lack of sleep.','______ starting to get on my nerves.', 'Please, ______ my apology.','The police interrogation ______ some revealing details about the crime.','Chickens ______ eggs.','I need to take a ______.', 'When a gas is turned into a liquid, the process is called______.','The sun’s ________  is easily visible only during a total solar eclipse?','Yeast, used in making pizza is a _____.','How long around is the Earth’s equator?','What is the speed of sound?','At what temperature, in fahrenheit,  does water freeze?','Which of the following is used in pencils?','What is the name of the highest mountain on Earth?','What is the name of the largest ocean on Earth?','Which is hotter, the center of the Earth, or the surface of the Sun?',' There are ten houses on the street. Three people live in each house. How many people live on the street?',' It takes Matt four hours to mow two lawns. How many lawns can he mow in ten hours?','20 = 3x + 8; x = ?','increase 5 by 40%','A man\'s regular pay is $3 per hour up to 40 hours. Overtime is twice the payment for regular time. If he was paid $168, how many hours overtime did he work?',' Items bought by a trader for $80 are sold for $100. The profit expressed as a percentage of cost price is','Which of the following is NOT a prime number?','What is the simple interest earned on $10 000 invested for 3 months at a rate of 5% per annum?','A man bought a shirt at a sale.  He saves $30 on the normal price when he paid $120 for the shirt. What was the percentage discount on the shirt?',' If an increase of 20% will change the price of an  item to $480, what is the original price of the item?',]
//
// wrongAnswerTwoArray = ['Belfast','Iran','America','Las Cruces','Mount Rainier','Kyoto','Nagoya','Nigeria','Sweden','Walla Walla', 'They\'re','principles','to','emigrate','affects','Your','exempt', 'elicit','lied','broke','deposition','spots','bacteria','14,901 miles','867 m.p.h.','30 degrees','silicon','Mt. Cleverest','The Indian','They are equally hot','10',' Ten lawns','2','9','16','2.5','41','500','80','384',]
//
//
// wrongAnswerThreeArray = ['Rio De Janeiro','Saudi Arabia','Africa','Farmington','Mount Shasta','Mexico City','Hiroshima','South Africa','Norway','Spokane','There\'s','principals','tutu','immigrate','effects','Youre','accepts','illicited','layed','brakes','appreciation','nose','virus','44,901 miles','567 m.p.h.','29 degrees','charcoal','Mt. Endevourest','The Arctic','Neither are hot','7','Three lawns','6','35''12','15','31','200','45','320',]

function questionDisplay () {
  while (totalQuestionsAnsweredCounter < 1) {
    var fullDivsCounter = 0;
    for (var i = 0; i < 3; i++) {
      var checkEmptyDiv = document.getElementById(i);
      if (checkEmptyDiv.childNodes.length === 0) {
        createDiv(i);
        return;
      } else {
        fullDivsCounter++;
      }
      // if (fullDivsCounter > 8) {
      //   //display game over div
      // }
    }
  }
}
var formTouched;
var questionNumber;
var questionTracker;
var randomNumberArray = [];
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
  newDiv.innerHTML = '<form id="' + divDeclare + '"><legend>' + questionObjectArray[randomNumber].questionString + '<br></legend><input type="radio" name="rightAnswer"  />' + questionObjectArray[randomNumber].rightAnswer + '<br><input type="radio" name="wrongAnswerOne" />' +  questionObjectArray[randomNumber].wrongAnswerOne + '<br><input type="radio" name="wrongAnswerTwo" />' +  questionObjectArray[randomNumber].wrongAnswerTwo + '<br><input type="radio" name="wrongAnswerThree" />' +  questionObjectArray[randomNumber].wrongAnswerThree + '<br><button name="submitAnswer" >Submit</button></form>';
  newDiv.class = questionObjectArray[randomNumber].category;
  var divGoesInto = document.getElementById(divPosition);
  divGoesInto.appendChild(newDiv);
  formTouched = document.getElementById('questionForm' + divPosition);
  console.log("questionForm[" + divPosition + "]?"  + formTouched);
  formTouched.addEventListener('submit', getFormValue);
}
setInterval(questionDisplay, 10000);


var formConcatenate;
// var formTouched = document.getElementById('questionForm').answer;
//
// formTouched.addEventListener('submit', getFormValue);
//
function getFormValue (event) {
  event.preventDefault();
  console.log("handler fired");
  formConcatenate = 'questionForm' + questionTracker;
  console.log(formConcatenate);
  var selection = document.getElementById(formConcatenate).getElementsByTagName('input');
  console.log(selection);
    if (questionForm0.rightAnswer.checked) {
      questionObjectArray[questionNumber].rightAnswerCounter++;
      totalQuestionsAnsweredCounter++;
      localStorage.setItem('guacaResults', JSON.stringify(questionObjectArray));
    } else {
      questionObjectArray[questionNumber].wrongAnswerCounter++;
      totalQuestionsAnsweredCounter++;
      localStorage.setItem('guacaResults', JSON.stringify(questionObjectArray));
    }
  }
