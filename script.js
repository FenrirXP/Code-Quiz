var questions = 
[
  {
    question: "What is a coders best friend?",
    choices: ["Google", "A Dictionary", "NaN", "A Liberian"],
    answer: 0
  },

  {
    question: "What does CSS stand for?",
    choices: ["Counter Strike Source","Cascading Style Sheets","California Superbike School","Customer Satisfaction Survey"],
    answer: 1
  },

  {
    question: "What is an array?",
    choices: ["A government code","Something used solely in CSS","A special variable, which can hold more than one value","It's just a fancy word"],
    answer: 2
  },

  {
    question: "How can you select an element that already exists in a DOM?",
    choices: ["querySelector","getElementById","querySelectorAll","addEventListener"],
    answer: 1
  
  },

]

var timerEl= document.getElementById("countdown");
var mainEl= document.getElementById("main");

function countdown(){
    
  var timeLeft = 10;
 
  var timeInterval = setInterval(function () {
  
    if (timeLeft > 1) {

      timerEl.textContent = timeLeft + ' seconds remaining';
   
      timeLeft--;
    } else if (timeLeft === 1) {

      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {

      
     
      timerEl.textContent = "The Game is Over!!!";
   
      clearInterval(timeInterval);
      
    
      displayMessage();

     
      
    }
  }, 1000);
}
countdown();



document.getElementById("myBtn").addEventListener("click",function (event) {
  document.querySelector("h2").innerText="The Quiz Has Begun!!!"
});

document.getElementById("myBtn").addEventListener("click",function (event) {
  document.querySelector("button").innerText="Continue"
  
});










