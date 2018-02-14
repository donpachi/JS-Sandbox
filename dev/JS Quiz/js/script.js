function submitAnswers(){
    var total = 4;
    var score = 0;

    //Get input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;

    //Form validation
    for(i = 1; i <= total; i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert('Question '+i+' needs to be filled out.');
            return false;
        }
    }

    //Correct Answers
    var answers = ["b","a","d","b"];

    //Check answers
    for(i = 1; i <= total; i++){
        if(eval('q'+i) == answers[i-1]){
            score++;
        }
    }

    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
    return false;
}