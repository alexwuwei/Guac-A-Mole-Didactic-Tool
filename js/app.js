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
questionObjectArray[2] = new QuestionAnswer ('The North Atlantic current brings warm waters from the tropics to the west coast of which continent?', 'Europe', 'Asia', 'America', 'Africa' 'Geography');
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
questionObjectArray[13] = new QuestionAnswer ('My parents ______ from Guatemala over 40 years ago.', 'emigrated', 'immigrated', 'emigrate', 'immigrate' 'Grammar');
questionObjectArray[14] = new QuestionAnswer ('Fatigue is one ______ of lack of sleep.', 'effect', 'affect', 'affects', 'effects', 'Grammar');
questionObjectArray[15] = new QuestionAnswer ('______ starting to get on my nerves.', 'You\'re', 'Yours', 'Your', 'Youre', 'Grammar');
questionObjectArray[16] = new QuestionAnswer ('Please, ______ my apology.', 'accept', 'except', 'exempt', 'accepts' 'Grammar');
questionObjectArray[17] = new QuestionAnswer ('The police interrogation ______ some revealing details about the crime.', 'elicited', 'illicit', 'elicit', 'illicited' 'Grammar');
questionObjectArray[18] = new QuestionAnswer ('Chickens ______ eggs.', 'lay', 'lie', 'lied', 'layed','Grammar');
questionObjectArray[19] = new QuestionAnswer ('I need to take a ______.', 'break', 'brake', 'broke', 'brakes', 'Grammar');
