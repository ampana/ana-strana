var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC;
var checked1 = 0; 

var questions = [
  {
      question: "2 * 3 =",
      a: "21",
      b: "27",
      c: "6",
      answer: "C"
    },
  {
      question: "8 / 4 =",
      a: "2",
      b: "65",
      c: "37",
      answer: "A"
    },
  {
      question: "9 - 8 =",
      a: "88",
      b: "112",
      c: "1",
      answer: "C"
    },
  ];

  function get(x){
    return document.getElementById(x);
  }

  function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
      pos = 0;
      correct = 0;
      return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()' style='display: inline block;font-size: 18px;color: #fff;background: #333;padding: 13px 20px;text-align: center;border: none;cursor: pointer;font-family: Verdana, Geneva, Tahoma, sans-serif;'>Submit Answer</button>";
  
  }
  
  function checkAnswer(){
    
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
        checked1++;
      }
    }
    if(checked1){
    if(choice == questions[pos].answer){
      correct++;
    }
    pos++;
    checked1 = 0; 
    renderQuestion();
  }
    else { 
      window.alert("Please check one answer :) ");
    }
}

  window.addEventListener("load", renderQuestion, false);

  