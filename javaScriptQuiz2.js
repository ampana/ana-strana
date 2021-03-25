var pos2 = 0;
var correct2 = 0;
var test2, test_status2, question2, choice2, choices2, chA2, chB2, chC2, argument;
var checked2 = 0; 

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
      pos2 = 0;
      correct2 = 0;
      return false;
    }
    get("test_status2").innerHTML = "Question "+(pos2+1)+" of "+questions2.length;
    
    question2 = questions2[pos2].question2;
    chA2 = questions2[pos2].a2;
    chB2 = questions2[pos2].b2;
    chC2 = questions2[pos2].c2;
   
    test2.innerHTML = "<h3>"+question2+"</h3>";
   
     if(pos2==0){
     test2.innerHTML += "<img src='paris.png' alt='' height=300px width=590px></img>";}
     if(pos2==1){
     test2.innerHTML += "<img src='london.jpg' alt='' height=300px width=590px></img>";}
     if(pos2==2){
     test2.innerHTML += "<img src='newyork.jpg' alt='' height=300px width=590px></img>";}
    
    test2.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA2+"</label><br>";
    test2.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB2+"</label><br>";
    test2.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC2+"</label><br><br>";
    test2.innerHTML += "<button onclick='checkAnswer2()' style='display: inline block;font-size: 18px;color: #fff;background: #333;padding: 13px 20px;text-align: center;border: none;cursor: pointer;font-family: Verdana, Geneva, Tahoma, sans-serif;'>Submit Answer</button>";
  }
  
  function checkAnswer2(){

    choices2 = document.getElementsByName("choices");
    for(var i=0; i<choices2.length; i++){
      if(choices2[i].checked){
        choice2 = choices2[i].value;
        checked2++;
      }
    }
    if(checked2){
    if(choice2 == questions2[pos2].answer2){
      correct2++;
    }
    pos2++;
    checked2 = 0; 
    renderQuestion2();
  }
    else { 
      window.alert("Please check one answer :) ");
    }
}

  window.addEventListener("load", renderQuestion2, false);