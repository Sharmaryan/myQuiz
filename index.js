var readLineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var userName = readLineSync.question(chalk.blue('What is your name?'));

console.log(chalk.bold.blue(`hello ${userName} let's see how much do you know aryan?`));

function playQuiz(question, answer) {
	var userAns = readLineSync.question(question);

	if (userAns.toUpperCase() === answer.toUpperCase()) {
		console.log(chalk.yellow(' right answer \n'));
		score = score + 1;
      console.log(chalk.yellow(`your current score ${score}`));
	} else {
		console.log(chalk.red(' wrong answer \n'));
      console.log(chalk.red(`your current score ${score}`));
	}
}

// questions
var questionOne = {
	question: chalk.italic.green('What is my fullname? \n a: aryan sharma  \n b: aryan kumar sharma\n c: aryan vats \n d: aryan vats sharma \n'),
	answer: 'a'
};
var questionTwo = {
	question: chalk.italic.green('Where do I live? \n a:ghaziabad \n b:delhi \n c: banglore \n d: haridwar \n ') ,
	answer: 'a'
};
var questionThree = {
	question: chalk.italic.green('Which laptop brand I have? \n a: dell \n b: apple \n c: lenovo \n d: samsung \n '),
	answer: 'c'
};
var questionFour = {
	question: chalk.italic.green('What is my hobby? \n a: cooking \n b: dancing \n c: singing \n d: reading \n'),
	answer: 'c'
};
var questionFive = {
	question: chalk.italic.green('What is name of my favourite fast food? \n a: momos \n b: chow mein \n c: chhole bhature \n d: samosa \n'),
	answer: 'a'
};
var questionSix = {
  question: chalk.italic.green('Which mobile brand do I have? \n a: redmi \n b: apple \n c: lenovo \n d: samsung \n'),
  answer: 'a'
}

// array of objects

var questions = [
	questionOne,
	questionTwo,
	questionThree,
	questionFour,
	questionFive,
  questionSix
];

for (var i = 0; i < questions.length; i++) {
	var currentQuestion = questions[i];
	playQuiz(currentQuestion.question, currentQuestion.answer);
}

// score data

var highScore = [
	{
		name: 'aryan',
		score: '6'
	},
	{
		name: 'deepak',
		score: '5'
	}
];

console.log('Your score: ' + score);
console.log('Check out the high score');

for (var j = 0; j < highScore.length; j++) {
	console.log(chalk.italic(highScore[j].name + ' : ' + highScore[j].score)); 
}

calculateScore()

function calculateScore(){
if(highScore[0].score < score){
  console.log('you score higher than aryan, send me the screenshot I will update it');
}
else if(highScore[1].score < score){
  console.log(chalk.yellow.bold('you score higher than deepak, send me the screenshot, I will update it'));
}
else if((highScore[1].score == score) || (highScore[1].score == score)){
console.log(chal.yellow.bold(`You scored high`));
}
else{
  console.log(chalk.italic.red('you loose'));
}

}

