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
  
    // clear the start button and replace the main section with question
     $("#main-section").html("");
     $("#main-section").append(firstQuestion,secondQuestion, thirdQuestion);

});
   
     