var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC;

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
      // resets the variable to allow users to restart the test
      pos = 0;
      correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    // display the question
    test.innerHTML = "<h3>"+question+"</h3>";
    // display the answer options
    // the += appends to the data we started on the line above
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()' class='btn' style='height:3px; width:130px;font-size:0.80em; font-family: sans-serif;' >Submit Answer</button>";
  }
  
  function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // checks if answer matches the correct choice
    if(choice == questions[pos].answer){
      //each time there is a correct answer this value increases
      correct++;
    }
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
  }

  window.addEventListener("load", renderQuestion, false);

  