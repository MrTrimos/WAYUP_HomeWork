const option1 = document.querySelector('.option1'),
	  option2 = document.querySelector('.option2'),
	  option3 = document.querySelector('.option3'),
	  option4 = document.querySelector('.option4');

const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question'); // вопрос

const numberOfQuestion = document.getElementById('number-of-question'), //номер вопроса
	  numberOfAllQuestions = document.getElementById('number-of-all-questions'); //количество всех вопросов


let indexOfQuestion, // index текущего вопроса
	indexOFPage = 0; // index страницы

const answersTracker = document.getElementById('answers-tracker'); // обертка для трекера
const btnNext = document.getElementById('btn-next'); // кнопка далее

let score = 0; // итоговый результат

const correctAnswer = document.getElementById('correct-answer'), // количество правельных ответов
	  numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'); // количество всех вопровов в модальном окне
	  btnTryAgain = document.getElementById('btn-try-again'); // начать викторину заново кнопка


const questions = [
	{
		question: 'Язык JavaScript является подвидом языка Java - верно?',
		options: [
			'да',
			'нет',
			'наоборот, Java - подвид JavaScript',
		],
		rightAnswer: 1

	},
	{
		question: 'Как объявить функцию в JavaScript?',
		options: [
			'function:MyFunction()',
			'function MyFunction()',
			'function = MyFunction()',
			'function = New MyFunction()',
		],
		rightAnswer: 1

	},
	{
		question: 'Какое из этих ключевых слов ООП не используется в JavaScript?',
		options: [
			'new',
			'все есть',
			'this',
			'super',
			'instanceOf',
		],
		rightAnswer: 1

	},
	{
		question: 'JSON - это...',
		options: [
			'JavaScript Object Notation',
			'название следующей версии JavaScript',
			'JavaScript Over Network',
			'имя создателя JavaScript',
		],
		rightAnswer: 0

	},
	{
		question: 'Можно ли в скрипте перевести посетителя на другую страницу сайта?',
		options: [
			'да, но только в рамках текущего сайта',
			'нет, нельзя',
			'да, куда угодно',
		],
		rightAnswer: 2

	},
	{
		question: 'Расшифруйте аббревиатуру DOM.',
		options: [
			'Document Object Model',
			'Digital Optical Modulation',
			'Domestic Object Mode',
		],
		rightAnswer: 0

	},
	{
		question: 'Чем отличается const от let?',
		options: [
			'const - не является частью JavaScript',
			'переменные, объявленные через const, находятся в глобальной видимости',
			'объявление const задаёт константу, то есть значение, которое нельзя менять',
		],
		rightAnswer: 2

	},
	{
		question: 'Как в JavaScript создать массив?',
		options: [
			'let array = new Array( ) или let array = [ ]',
			'let array = new Array{ } или let new array = [ ]',
			'int new Array( ) или let new Array( )',
		],
		rightAnswer: 0

	},
	{
		question: 'Расшифруйте аббревиатуру API.',
		options: [
			'Analog Programm Interface',
			'Application Programming Interface',
			'Academy Provide Infinite',
		],
		rightAnswer: 0

	},

];


numberOfAllQuestions.innerHTML = questions.length; // вывод количество вопросов

const load = () => {
	question.innerHTML = questions[indexOfQuestion].question; // сам вопрос

	//мапим ответы
	option1.innerHTML = questions[indexOfQuestion].options[0];
	option2.innerHTML = questions[indexOfQuestion].options[1];
	option3.innerHTML = questions[indexOfQuestion].options[2];
	option4.innerHTML = questions[indexOfQuestion].options[3];

	numberOfQuestion.innerHTML = indexOFPage + 1; // установка номера текущей страницы
	indexOFPage++; // увиличения индекса страницы

};

let completedAnswers = []; // массив для уже заданных вопросов


const randomQuestion = () => {
	let randomNumber = Math.floor(Math.random() * questions.length);
	let hitDuplicate = false;

	if(indexOFPage == questions.length){    // логика на повторение
		quizOver();
	} else{
		if(completedAnswers.length > 0){
			completedAnswers.forEach(item => {
				if(item == randomNumber){
					hitDuplicate = true;
				}
			});
			if(hitDuplicate == true){
				randomQuestion();
			} else{
				indexOfQuestion = randomNumber;
				load();
			}
		}
		if(completedAnswers.length == 0){
			indexOfQuestion = randomNumber;
			load();
		}
	}
	completedAnswers.push(indexOfQuestion); // заполнение масива
}


const checkAnswer = el => {  // подсветка ответов
	if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer){
		el.target.classList.add('correct');
		updateAnswerTracker('correct');
		score++; //добовлениие поинтов
	} else {
		el.target.classList.add('wrong');
		updateAnswerTracker('wrong');
	}
	disabledOptions();
}

const disabledOptions = () => {     //блокировка кнопок и показ правельного варианта ответа
	optionElements.forEach(item => {
		item.classList.add('disabled');
		if(item.dataset.id == questions[indexOfQuestion].rightAnswer){
			item.classList.add('correct');
		}
	});
}

for(option of optionElements){
	option.addEventListener('click', e => checkAnswer(e));
}

// удаление всех классов со всех ответов
const enableOptions = () => {
	optionElements.forEach(item => {
		item.classList.remove('disabled', 'correct' , 'wrong');
	})
}

const answerTracker = () => {
	questions.forEach(() => {
		const div = document.createElement('div');
		answersTracker.appendChild(div); // добовление элемента
	})
}

const updateAnswerTracker = status => {
	answersTracker.children[indexOFPage - 1].classList.add(`${status}`); // задает стиль кружка в зависимости от передоного параметра (верно, не верно)
}


// блокировка переходов на следуюший вопрос если нет ответа
// ищем есть ли у обектов присвоеній класс disabled
const validate = () => {
	if(!optionElements[0].classList.contains('disabled')){
		alert('Вам нужновыбрать ответ');
	} else {
		randomQuestion();
		enableOptions();
	}
}

// конец игры
const quizOver = () => {
	document.querySelector('.quiz-over-modal').classList.add('active');
	correctAnswer.innerHTML = score;
	numberOfAllQuestions2.innerHTML = questions.length;
	console.log("Game over");
}

// Перезагрузка страници при нажатии на кнопку
const tryAgain = () => {
	window.location.reload();
}

btnTryAgain.addEventListener('click', tryAgain);

// переход на новый слайд
btnNext.addEventListener('click', () => {
	validate();
})

window.addEventListener('load', () => {  // проверка загруженна ли страница HTML
	randomQuestion(); // прорисовка
	answerTracker();
});
