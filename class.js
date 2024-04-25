

// reate a Car class or function constructor that has the following properties: a. make (string): The make of the car, e.g., "Toyota". 
// b. model (string): The model of the car, e.g., "Camry". 
// c. year (number): The year the car was manufactured, e.g., 2020. 
// d. isAvailable (boolean): Indicates if the car is currently available for rent. 
// The Car class or function constructor should also have a method called toggleAvailability that changes the isAvailable property to its opposite value (true to false, false to true) 


class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
    toggleAvailability() {
      this.isAvailable = !this.isAvailable;
    }
}


const monstercar = new Car("Jeep", "Wrangler", 2001, true);
console.log(monstercar.isAvailable);
monstercar.toggleAvailability();
console.log(monstercar.isAvailable);






// Create a Question class with the following properties: 
// ● text(string): The text of the question. 
// ● options(array): An array containing the multiple-choice options. ● correctAnswer(string): The correct answer to the question. 
// The Question class should also have a method called checkAnswer that takes a user's answer as a parameter and returns true if the answer is correct and false otherwise. 


class Question {
    constructor(text, options, correctAnswer) {
       this.text = text;
       this.options = options;
       this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
       return userAnswer === this.correctAnswer;
    }
   }
   class Quiz {
    constructor() {
       this.questions = [];
       this.currentQuestionIndex = 0;
       this.score = 0;
    }
    addQuestion(question) {
       this.questions.push(question);
    }
    nextQuestion() {
       if (this.currentQuestionIndex < this.questions.length - 1) {
         this.currentQuestionIndex;
       } else {
         console.log("");
       }
    }
    submitAnswer(userAnswer) {
       const currentQuestion = this.questions[this.currentQuestionIndex];
       if (currentQuestion.checkAnswer(userAnswer)) {
         this.score++;
         console.log("Correct!");
       } else {
         console.log("Incorrect.");
       }
       this.nextQuestion();
    }
   }
const question1 = new Question("Who was the first president of Kenya?", ["Moi", "Kenyatta", "Obama"], "Kenyatta");
const question2 = new Question("Who was the first prime minister of Kenya?", ["Moi", "Odinga", "Waluse"], "Waluse");
const Quiz = new Quiz();
secondQuiz.addQuestion(question1);
secondQuiz.addQuestion(question2);
secondQuiz.submitAnswer("Kenyatta");
secondQuiz.submitAnswer("Waluse");
secondQuiz.submitAnswer("Odinga");
console.log(`Your final score is: ${Quiz.score}`);