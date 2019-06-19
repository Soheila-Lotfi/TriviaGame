$("#start").click(function() {

// first question       
    var question1=$("<p>").attr("class","question").html("In which year were the Academy Awards, or 'Oscars', first presented?")
    
    // create a form including three radio buttons and labels
    var firstQuestion=$("<form>");
        // first radio button-first answer 
        var firstInput= $("<input>").attr({
        type:'radio',
        name:'firstquestion',
        value:'1929',
        id:'first',
        class:'radio-button'
        });
        var firstLabel=$("<label>").attr("for","first").text("1929");

        // second radio button-second answer
        var secondInput= $("<input>").attr({
        type:'radio',
        name:'firstquestion',
        value:'1945',
        id:'second',
        class:'radio-button'
        });
        var SecondLabel=$("<label>").attr("for","second").text("1945");

        // Third radio button-Third answer
        var thirdInput= $("<input>").attr({
        type:'radio',
        name:'firstquestion',
        value:'1921',
        id:'third',
        class:'radio-button'
        });
        var thirdLabel=$("<label>").attr("for","third").text("1921");
        
        // append question and radio buttons (inputs and labels) into first form (first question)
     
        firstQuestion.append(question1, firstInput, firstLabel, secondInput, SecondLabel, thirdInput, thirdLabel);

//Second question      
    var question2=$("<p>").attr("class","question").html("What is the name of the kingdom where the 2013 animated movie Frozen is set?")
        
        // create a form including three radio buttons and labels
        var secondQuestion=$("<form>");
        
        // first radio button-first answer 
        var firstInput2= $("<input>").attr({
            type:'radio',
            name:'secondquestion',
            value:'Anytown',
            id:'first2',
            class:'radio-button'
        });
        var firstLabel2=$("<label>").attr("for","first2").text("Anytown");
        
        // second radio button-second answer
        var secondInput2= $("<input>").attr({
            type:'radio',
            name:'secondquestion',
            value:'Arendelle',
            id:'second2',
            class:'radio-button'
        });
        var SecondLabel2=$("<label>").attr("for","second2").text("Arendelle");

        //Third radio button-Third answer
        var thirdInput2= $("<input>").attr({
            type:'radio',
            name:'secondquestion',
            value:'Danville',
            id:'third2',
            class:'radio-button'
        });
        var thirdLabel2=$("<label>").attr("for","third2").text("Danville");

        // append question and radio buttons (inputs and labels) into first form (first question)
        secondQuestion.append(question2, firstInput2, firstLabel2, secondInput2, SecondLabel2, thirdInput2, thirdLabel2);

// third question
    var question3=$("<p>").attr("class","question").html("Which English actor won the 2014 Academy Award for best actor for his role in The Theory of Everything?")

    // create a form including three radio buttons and labels
    var thirdQuestion=$("<form>");

    // first radio button-first answer 
    var firstInput3= $("<input>").attr({
        type:'radio',
        name:'thirdquestion',
        value:'Colin Firth',
        id:'first3',
        class:'radio-button'
    });
    var firstLabel3=$("<label>").attr("for","first3").text("Colin Firth");
    
    // second radio button-second answer

    var secondInput3= $("<input>").attr({
        type:'radio',
        name:'thirdquestion',
        value:'Tom Hardy',
        id:'second3',
        class:'radio-button'
    });
    var SecondLabel3=$("<label>").attr("for","second3").text("Tom Hardy");

    //Third radio button-Third answer
    var thirdInput3= $("<input>").attr({
        type:'radio',
        name:'thirdquestion',
        value:'Eddie Redmayne',
        id:'third3',
        class:'radio-button'
    });
    var thirdLabel3=$("<label>").attr("for","third3").text("Eddie Redmayne");

    // append question and radio buttons (inputs and labels) into first form (first question)
     thirdQuestion.append(question3, firstInput3, firstLabel3, secondInput3, SecondLabel3, thirdInput3, thirdLabel3);
  
// make timer for the page using setInterval method
    // variables
        var count=30;      // user has 30 seconds to answer the question    
        var timer=$("<p>").html("<h2> Time Remaining:"+""+count+""+"seconds"+"</h2>");   // creat a p tag with the content of "Time Remaining:30 seconds
    // show the timer on the page
      
    // clear the start button and replace the main section with questions and timer
        $("#main-section").empty();
        $("#main-section").append(timer);
        $("#main-section").append(firstQuestion,secondQuestion, thirdQuestion);
        
    // excute decrement function every 1 second using setInterval methos
        clearInterval(intervalId);
        var intervalId=setInterval(decrement, 1000);

    // build the timer by creating decrement function
        function decrement(){
            count--;
            timer.html("<h2> Time Remaining:"+""+count+""+"seconds"+"</h2>");    // update the content of timer with new count
            
            // when count equels to zero , the timer should stop and the trivia game's result show up on the page.
            if(count == 0){
                $("#main-section").empty();   
                result();
            }
        }
// make the result function to show the result on the page
    // variables
        var correctAnswer=0;
        var incorrectAnswer=0;
        var unAnswerd=3;

    //First Question- when the user choose one of the answers, it will run function below
        firstQuestion.on('change', function() {
            unAnswerd--;                            // user choose one answer so unanswerd questions is decreased by one
            var userAnswer=$('input[name=firstquestion]:checked').val();        // this statemant grabs the value of whatever input has been chosen by the user and put it in a new varaible
        
            if(userAnswer ==="1929"){          
                correctAnswer++;                      // the user choose the right answer by choosing 1929
            }
            else{
                incorrectAnswer++;
            }    
        }); 
        
    //secondQuestion 
        secondQuestion.on('change', function() {
            unAnswerd--;
            var userAnswer=$('input[name=secondquestion]:checked').val(); 
            if(userAnswer ==="Arendelle"){ 
            correctAnswer++;              // the right answer for the second question is Arendelle
            }
            else{
            incorrectAnswer++;
            }
         });


});
   
     