//  SO KOMENTARI SE OSTAVENI KODOVITE 

//  OD PRETHODNITE VARIJANTI. 

//  KAKO KRAEN (neiskomentiran) E OSTAVEN OPTIMALEN KOD SO JQUERY. 











$(document).ready(function(){
  // $("[id^='heart']").mouseenter(function() {
    
        $("[id^='main']").mouseenter(function() {
            $(this).fadeOut(2500);
        });
        $("[id^='main']").mouseleave(function() {
                $(this).fadeIn(0.1);
      });
  });

var name;
  name = window.prompt("Enter your username: ");

//   function thisComment(here){

//   var id = here.id ; 
//   var res_id = id.charAt( 6 );
//   id_number = parseInt(res_id);

//   var printid = "txtOutput2";
//   var printid_conc = printid;

//   var clearid = "txtOutput";
//   var clearid_conc = clearid;

//   var printdate = "printdate"; 
//   var printdate_conc = printdate; 
  
//   for (i=1; i<=3; i++){
//     if (i == id_number){
//       printid_conc = printid_conc + i;
//       clearid_conc = clearid_conc + i; 
//       printdate_conc = printdate_conc + i; 
//     }
//   }

//   var txtOutput = document.getElementById(clearid_conc);
//   var output = txtOutput.value;

//   var d = new Date();
//   var day = d.getDate();
//   var month = d.getMonth();
//   month=month+1; 
//   var year = d.getFullYear();

//   var h = d.getHours();
//   var m = d.getMinutes();

//   where = document.getElementById(printid_conc);
//   // where_date = document.getElementById(printdate_conc);
//   what = document.getElementById(clearid_conc).value;
//   where.innerHTML += name + " " + what;
//   // where_date.innerHTML += day + "." + month + "." + year + " " + h +":"+m; 
//   where.innerHTML += "<br>" + day + "." + month + "." + year + " " + h +":"+m+"<br>"; 
//   document.getElementById(clearid_conc).value = "";
//   } 

// window.addEventListener("click",thisComment,false) 



// function thisLike(heart){

//   var heart_id = heart.id ; 
//   var res_heart_id = heart_id.charAt( 8 );
//   id_heart_number = parseInt(res_heart_id);

//   iconImg = document.getElementById( heart_id );
//   iconImg.addEventListener( "click", thisLike, false );

//   var likeid = "like";
//   var likeid_conc = likeid;
  
//     changeImage(heart);

//   function changeImage(heart) {
//     //  heart.src = heart.bln ? "heart0.png" : "heart1.png";
//     heart.bln = !heart.bln;  /* assigns opposite boolean value always */
//     if (heart.src = !heart.bln){
//       heart.src = "heart0.png"; 
//       for (i=1; i<=3; i++){
//         if (i = id_heart_number){
//         likeid_conc = likeid_conc + i;
//         document.getElementById(likeid_conc).innerHTML="0 like";}
//     }
//  }
//  else {
//   heart.src = "heart1.png"; 
//       for (i=1; i<=3; i++){
//         if (i = id_heart_number){
    
//         likeid_conc = likeid_conc + i;
//         document.getElementById(likeid_conc).innerHTML="1 like";}
//     }
//  }
//  }
// }

// window.addEventListener( "load", thisLike, false );

function start () { 

  if (localStorage.clickcount_1 >= 1){
    document.getElementById("like1").innerHTML = localStorage.clickcount_1 + " like(s)";
    var heart = document.getElementById("hearting1");
    heart.src = "heart1.png";
  }
  if (localStorage.clickcount2 >= 1){
    document.getElementById("like2").innerHTML = localStorage.clickcount2 + " like(s)";
    var heart = document.getElementById("hearting2");
    heart.src = "heart1.png";
  }
  if (localStorage.clickcount3 >= 1){
    document.getElementById("like3").innerHTML = localStorage.clickcount3 + " like(s)";
    var heart = document.getElementById("hearting3");
    heart.src = "heart1.png";
  }
}

  function thisLike1(heart) {

         
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount_1) {
        localStorage.clickcount_1 = Number(localStorage.clickcount_1)+1;
      } else {
        localStorage.clickcount_1 = 1;
      }
      if (localStorage.clickcount_1>=1) {
        heart.src = "heart1.png";
      }
      document.getElementById("like1").innerHTML = localStorage.clickcount_1 + " like(s)";
    } else {
      document.getElementById("like1").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


  function thisLike2(heart) {

         
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount2) {
        localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
      } else {
        localStorage.clickcount2 = 1;
      }
      if (localStorage.clickcount2>=1) {
        heart.src = "heart1.png";
      }
      document.getElementById("like2").innerHTML = localStorage.clickcount2 + " like(s)";
    } else {
      document.getElementById("like2").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

  function thisLike3(heart) {

         
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount3) {
        localStorage.clickcount3 = Number(localStorage.clickcount3)+1;
      } else {
        localStorage.clickcount3 = 1;
      }
      if (localStorage.clickcount3>=1) {
        heart.src = "heart1.png";
      }
      document.getElementById("like3").innerHTML =  localStorage.clickcount3 + " like(s)";
    } else {
      document.getElementById("like3").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


  window.addEventListener( "load", start, false );
  


//   function thisComment(here){

//   var id = here.id ; 
//   var res_id = id.charAt(6);
//   id_number = parseInt(res_id);

//   var printid = "txtOutput2";
//   var printid_conc = printid;

//   var clearid = "txtOutput";
//   var clearid_conc = clearid;
  
//   for (i=1; i<=3; i++){
//     if (i == id_number){
//       printid_conc = printid_conc + i;
//       clearid_conc = clearid_conc + i; 
//     }
//   }

//   var txtOutput = document.getElementById(clearid_conc);
//   var output = txtOutput.value;

  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth();
  month=month+1; 
  var year = d.getFullYear();

  var h = d.getHours();
  var m = d.getMinutes();

//   var node = document.createElement("li");
//   // var textnode = document.createTextNode( name + ": " + output + "\n" + n + "."+ m +"."+k); 
//   var textnode = document.createTextNode( name + ": " + output );      
//   node.appendChild(textnode);  

//   document.getElementById(printid_conc).appendChild(node); 
//   document.getElementById(clearid_conc).value=""; 

//   var node2 = document.createElement("li");
//   node2.setAttribute('style','font-size:0.7em');
//   var textnode2 = document.createTextNode( h+":"+m+", "+ day + "."+ month +"."+ year); 
//   node2.appendChild(textnode2);
//   document.getElementById(printid_conc).appendChild(node2);
//   } 

// window.addEventListener("click",thisComment,false) 

  $(document).ready(function(){


    // $("#comBut1").click(function(){
    //     // alert("The paragraph was clicked.");

    //     var com = $("#txtOutput1").val();
    //     var content = '<li>'+ name + ": " + com +'<br>' + h+":"+m+", "+ day + "."+ month +"."+ year + " " + "<img src = 'trash.png' width = '25' height='22' display=' inline;' alt = 'trash' id='comTrash' class='btnRemove'></li>"
    //     $("#txtOutput21").append(content);
    //     // $("#txtOutput21").append('<li><i class="fas fa-trash" style="display: inline; color: #333; font-size: 1em; "></i></li>');
        
    //     $("#txtOutput1").val("");
    //     arr1.push(com); 
    //   });

        // $("#comBut2").click(function(){
    //     // alert("The paragraph was clicked.");
    //     var com = $("#txtOutput2").val();
    //     var content = '<li>'+ name + ": " + com +'<br>' + h+":"+m+", "+ day + "."+ month +"."+ year + " " + "<img src = 'trash.png' width = '25' height='22' display=' inline;' alt = 'trash' id='comTrash' class='btnRemove'></li>"
    //     $("#txtOutput22").append(content);
    //     $("#txtOutput2").val("");
    //     // var com = $("[id^='txtOutput']").val();
    //     // $("[id^='txtOutput2']").append('<li>' + name + ": " + com + '</li>');
    //     // $("[id^='txtOutput']").val("");
    //     
    //   });

    //   $("#comBut3").click(function(){
    //     // alert("The paragraph was clicked.");
    //     var com = $("#txtOutput3").val();
    //     // $("#txtOutput23").append('<li>' + name + ": " + com + '</li>');
    //     var content = '<li>'+ name + ": " + com +'<br>' + h+":"+m+", "+ day + "."+ month +"."+ year + " " + "<img src = 'trash.png' width = '25' height='22' display=' inline;' alt = 'trash' id='comTrash' class='btnRemove'></li>"
    //     $("#txtOutput23").append(content);
    //     $("#txtOutput3").val("");
    //     // var com = $("[id^='txtOutput']").val();
    //     // $("[id^='txtOutput2']").append('<li>' + name + ": " + com + '</li>');
    //     // $("[id^='txtOutput']").val("");
    //     // });
    //   });

    
      $("[id^='comBut']").click(function(){
        var com = $($("#" + $(this).parent().find('input').attr('id'))).val();
        var content = '<li>'+ name + ": " + com +'<br>' + h+":"+m+", "+ day + "."+ month +"."+ year + " " + "<img src = 'trash.png' width = '25' height='22' display=' inline;' alt = 'trash' id='comTrash' class='btnRemove'></li>"
        $($("#" + $(this).parent().find('ul').attr('id'))).append(content);
        $($("#" + $(this).parent().find('input').attr('id'))).val("");

      if (("#" + $(this).parent().find('input').attr('id')) == ("#txtOutput1")){
        localStorage.setItem('#txtOutput21', content);
        }
      if (("#" + $(this).parent().find('input').attr('id')) == ("#txtOutput2")){
        localStorage.setItem('#txtOutput22', content);
      }
      if (("#" + $(this).parent().find('input').attr('id')) == ("#txtOutput3")){
        localStorage.setItem('#txtOutput23', content);
      }

      });

      $("[id^='txtOutput']").on('click', '.btnRemove', function(){
        $(this).closest('li').fadeOut('slow', function(){
          $(this).remove();             
        //   mora i remove za da iscezne skroz
      });
    });

      $("[id^='sort']").click(function(){       
        sortUL($("#" + $(this).parent().find('ul').attr('id')));
      });


      function sortUL(selector) {
        var $ul = $(selector);
        $ul.find('li').sort(function (a, b) {
            var upA = $(a).text().length;
            var upB = $(b).text().length;
            return (upA > upB) ? -1 : (upA < upB) ? 1 : 0;
            // if (upA > upB){
            //   return -1;}
            // if (upA < upB){
            //   return 1;}
            // if (upA = upB){
            //   return 0 ;}
        }).appendTo(selector);
    };

    // var $coms2 = $('#txtOutput22'); 
    if(localStorage.getItem("#txtOutput21")) { 
      $('#txtOutput21').html(localStorage.getItem("#txtOutput21"));
    }

    if(localStorage.getItem("#txtOutput22")) { 
      $('#txtOutput22').html(localStorage.getItem("#txtOutput22"));
    }

    if(localStorage.getItem("#txtOutput23")) { 
      $('#txtOutput23').html(localStorage.getItem("#txtOutput23"));
      }
});