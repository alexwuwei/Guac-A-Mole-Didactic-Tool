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
