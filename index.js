var readLineSync = require('readline-sync');
var score = 0;

var userName = readLineSync.question('What is your name?');

console.log('hello ' + userName + " let's see how much do you know aryan?");

function playQuiz(question, answer) {
	var userAns = readLineSync.question(question);

	if (userAns.toUpperCase() === answer.toUpperCase()) {
		console.log('right answer');
		score = score + 1;
	} else {
		console.log('wrong answer');
	}
}

// questions
var questionOne = {
	question: 'What is my fullname?',
	answer: 'aryan sharma'
};
var questionTwo = {
	question: 'Where do I live?',
	answer: 'ghaziabad'
};
var questionThree = {
	question: 'What is my nick name?',
	answer: 'golu'
};
var questionFour = {
	question: 'What is my hobby?',
	answer: 'singing'
};
var questionFive = {
	question: 'What is name of my favourite fast food?',
	answer: 'momos'
};

// array of objects

var questions = [
	questionOne,
	questionTwo,
	questionThree,
	questionFour,
	questionFive
];

for (var i = 0; i < questions.length; i++) {
	var currentQuestion = questions[i];
	playQuiz(currentQuestion.question, currentQuestion.answer);
}

// score data

var highScore = [
	{
		name: 'aryan',
		score: '5'
	},
	{
		name: 'deepak',
		score: '4'
	}
];

console.log('Your score: ' + score);
console.log('Check out the high score');

for (var j = 0; j < highScore.length; j++) {
	console.log(highScore[j].name + ' : ' + highScore[j].score);
}
