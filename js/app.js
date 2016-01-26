function QuestionAnswer(questionString, rightAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree, category) {
  this.questionString = questionString;
  this.rightAnswer = rightAnswer;
  this.wrongAnswerOne = wrongAnswerOne;
  this.wrongAnswerTwo = wrongAnswerTwo;
  this.wrongAnswerThree = wrongAnswerThree;
  this.category = category;
}

QuestionAnswer.prototype.rightAnswerCounter = 0;
QuestionAnswer.prototype.wrongAnswerCounter = 0;
QuestionAnswer.prototype.questionDisplayCounter = 0;

questionObjectArray = [];
totalQuestionsAnsweredCounter = 0;

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

function questionDisplay () {
  while (totalQuestionsAnsweredCounter < 15) {
    var fullDivsCounter = 0;
    for (var i = 0; i < 10; i++) {
      var checkEmptyDiv = document.getElementById(i);
      if (checkEmptyDiv.childNodes.length === 0) {
        createDiv(i);
        break;
      } else {
        fullDivsCounter++;
      }
      if (fullDivsCounter > 8) {
        //display game over div
      }
    }
  }
}

function createDiv(divPosition) {
  var newDiv = document.createElement('div');
  newDiv.innerHTML = '<form class="questionForm"><legend>' + questionObjectArray[divPosition].questionString + '<br></legend><input type="radio" name="answer" value="answer" />' + questionObjectArray[divPosition].rightAnswer + '<br><input type="radio" name="answer" value="answer" />' +  questionObjectArray[divPosition].wrongAnswerOne + '<br><input type="radio" name="answer" value="answer" />' +  questionObjectArray[divPosition].wrongAnswerTwo + '<br><input type="radio" name="answer" value="answer" />' +  questionObjectArray[divPosition].wrongAnswerThree + '</form>';
  newDiv.class = 'red ';
  var divGoesInto = document.getElementById(divPosition);
  divGoesInto.appendChild(newDiv);
}
