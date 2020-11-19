var pos2 = 0;
var correct2 = 0;
var test2, test_status2, question2, choice2, choices2, chA2, chB2, chC2, argument;

var questions2 = [
  {
      question2: "Which city is this?",
      a2: "Veles",
      b2: "Skopje",
      c2: "Paris",
      answer2: "C"
    },
  {
      question2: "Which city is this?",
      a2: "London",
      b2: "Prilep",
      c2: "Bitola",
      answer2: "A"
    },
  {
      question2: "Which city is this?",
      a2: "Struga",
      b2: "Ohrid",
      c2: "New York",
      answer2: "C"
    },
  ];

  function get2(x){
    return document.getElementById(x);
  }

  function renderQuestion2(){
    test2 = get2("test2");
    if(pos2 >= questions2.length){
      test2.innerHTML = "<h2>You got "+correct2+" of "+questions2.length+" questions correct</h2>";
      get2("test_status2").innerHTML = "Test completed";
      // resets the variable to allow users to restart the test
      pos2 = 0;
      correct2 = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    }
    get("test_status2").innerHTML = "Question "+(pos2+1)+" of "+questions2.length;
    
    question2 = questions2[pos2].question2;
    chA2 = questions2[pos2].a2;
    chB2 = questions2[pos2].b2;
    chC2 = questions2[pos2].c2;
    // display the question
   
    test2.innerHTML = "<h3>"+question2+"</h3>";
   
     if(pos2==0){
     test2.innerHTML += "<img src='paris.png' alt='' height=300px width=590px></img>";}
     if(pos2==1){
     test2.innerHTML += "<img src='london.jpg' alt='' height=300px width=590px></img>";}
     if(pos2==2){
     test2.innerHTML += "<img src='newyork.jpg' alt='' height=300px width=590px></img>";}
    
    // display the answer options
    // the += appends to the data we started on the line above
    test2.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA2+"</label><br>";
    test2.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB2+"</label><br>";
    test2.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC2+"</label><br><br>";
    test2.innerHTML += "<button onclick='checkAnswer2()' class='btn' style='height:3px; width:130px;font-size:0.80em; font-family: sans-serif;' >Submit Answer</button>";
  }
  
  function checkAnswer2(){
    // use getElementsByName because we have an array which it will loop through
    choices2 = document.getElementsByName("choices");
    for(var i=0; i<choices2.length; i++){
      if(choices2[i].checked){
        choice2 = choices2[i].value;
      }
    }
    // checks if answer matches the correct choice
    if(choice2 == questions2[pos2].answer2){
      //each time there is a correct answer this value increases
      correct2++;
    }
    // changes position of which character user is on
    pos2++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion2();
  }

  window.addEventListener("load", renderQuestion2, false);