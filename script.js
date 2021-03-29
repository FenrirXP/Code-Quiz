var timerEl= document.getElementById("countdown");
var mainEl= document.getElementById("main");


document.getElementById("myBtn").addEventListener("click",function (event) {
  document.querySelector("h2").innerText="The Quiz Has Begun!!!"
});

document.getElementById("myBtn").addEventListener("click",function (event) {
  document.querySelector("button").innerText="Continue"
});


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












/*var myQuestions = [
  {
    question: "What is a coders best friend when he/she needs to find help or answers?",
    answer: {
      a: "Google",
      b: "Webster's Dictionary",
      c: "NaN"
    },
    correctAnswer:"a"
}]*/
