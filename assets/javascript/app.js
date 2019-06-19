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

});
   
     