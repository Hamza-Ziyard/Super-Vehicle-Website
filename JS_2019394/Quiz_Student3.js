function getRadioValue( radioValue ) {                  
    var i;
    var radnum = document.getElementsByName(radioValue);
    for ( i = 0, length=radnum.length; i < length; i++ ) {  //loop to each quiz
        if ( radnum[ i ].checked ) {    //check the seleceted radio btn
            var answer =radnum[i].value;
        } 
        radnum[ i ].disabled = true;    //disable radio buttons after submitting
    } 
    return answer;  //return the answer
}

var totalseconds = 120 * 1;                 //setting the timer
var mins = parseInt(totalseconds / 60);     //converting total secondds to minutes  
var seconds = parseInt(totalseconds % 60);  //balancing the seconds out from the minutes left 
var timer;

function Openform(){    //Start Quiz
    document.getElementById("footer12").style.marginTop = "70px";
    document.getElementById("footer12").style.position = "unset";
    document.getElementById("b2t").style.marginRight = "-255px";
    document.getElementById("rules").hidden = true;
    document.getElementById("end").style.display = "none";
    document.getElementById("displayquiz").style.display = '';
    document.getElementById("start").style.display = "none";
    document.getElementById("h1").style.marginBottom = "0"
    document.getElementById("h1").innerHTML = "Game On!"
    document.getElementById("h1").style.width = "58%"
    document.body.style.backgroundImage = "url('../Images_2019394/bg2.jpg')";
    document.getElementById("showtimer").innerHTML = 'Time Left: ' + mins + ' minutes ' + seconds + ' seconds ';

    if (totalseconds <= 0) {                    //end quiz if timer ends
        quiz1();
    } else {
        totalseconds--;
        mins = parseInt(totalseconds / 60);     //reduce the timer by 1 second
        seconds = parseInt(totalseconds % 60);
        timer = setTimeout(Openform, 1000);     //calling the timer
    }
}

function quiz1(){   //Submit
    if (totalseconds > 0){  //Check if all questions are checked
        var opt = document.querySelector('input[name=q1]:checked');
        if(!opt){
            alert("You have not completed all the questions!");
            return
        }
        var opt = document.querySelector('input[name=q2]:checked');
        if(!opt){
            alert("You have not completed all the questions!");
            return
        }
        var opt = document.querySelector('input[name=q3]:checked');
        if(!opt){
            alert("You have not completed all the questions!");
            return
        }
        var opt = document.querySelector('input[name=q4]:checked');
        if(!opt){
            alert("You have not completed all the questions!");
            return
        }
        var opt = document.querySelector('input[name=q5]:checked');
        if(!opt){
            alert("You have not completed all the questions!");
            return
        }
        var opt = document.querySelector('input[name=q6]:checked');
        if(!opt){
            alert("You have not completed all the questions!");
            return
        }
        var opt = document.querySelector('input[name=q7]:checked');
        if(!opt){
            alert("You have not completed all the questions!");
            return
        }
        var opt = document.querySelector('input[name=q8]:checked');
        if(!opt){
            alert("You have not completed all the questions!");
            return
        }
        var opt = document.querySelector('input[name=q9]:checked');
        if(!opt){
            alert("You have not completed all the questions!");
            return
        }
        var opt = document.querySelector('input[name=q10]:checked');
        if(!opt){
            alert("You have not completed all the questions!");
            return
        }
    }
        clearInterval(timer);   //Pause the timer once the submit is clicked
        document.getElementById("h1").style.width = "80%";
        document.getElementById("h1").innerHTML = "Your results"
        document.body.style.backgroundImage = "url('../Images_2019394/caar.jpeg')";

        var correct = 0;    
        var que1 = getRadioValue("q1")  //reading the values for Q1
        var que2 = getRadioValue("q2")  //reading the values for Q2
        var que3 = getRadioValue("q3")  //reading the values for Q3
        var que4 = getRadioValue("q4")  //reading the values for Q4
        var que5 = getRadioValue("q5")  //reading the values for Q5
        var que6 = getRadioValue("q6")  //reading the values for Q6
        var que7 = getRadioValue("q7")  //reading the values for Q7
        var que8 = getRadioValue("q8")  //reading the values for Q8
        var que9 = getRadioValue("q9")  //reading the values for Q9
        var que10 = getRadioValue("q10")//reading the values for Q10

        document.getElementById("report_head").innerHTML="Thank you for taking part in this Quiz<br><br>";
        document.getElementById("ex").style.display = '';   //emoji display
        document.getElementById("ex2").style.display = '';  //emoji display
        document.getElementById("score").style.display = '';    //final score display
        document.getElementById("Q1").style.display = '';   //display every answer
        document.getElementById("Q2").style.display = '';
        document.getElementById("Q3").style.display = '';
        document.getElementById("Q4").style.display = '';
        document.getElementById("Q5").style.display = '';
        document.getElementById("Q6").style.display = '';
        document.getElementById("Q7").style.display = '';
        document.getElementById("Q8").style.display = '';
        document.getElementById("Q9").style.display = '';
        document.getElementById("Q10").style.display = '';
        document.getElementById("end").style.display = '';
        document.getElementById("b2t").style.marginRight = "14px";
        //CHECKING IF THE ANSWERS ARE CORRECT
        if (que1 =="right"){
            document.getElementById("Q1").innerHTML="<br>&nbsp Your answer is correct<br><br>";
            document.getElementById("Q1").style.backgroundColor="#ddffab";
            correct = correct+2;
        }
        else if(que1 == "wrong"){
            document.getElementById("Q1").innerHTML="<br>&nbsp Incorrect answer. Correct answer is Triumph Rocket III<br><br>";
            document.getElementById("Q1").style.backgroundColor="#ff726f";
            correct--;
        }
        else {
            document.getElementById("Q1").innerHTML="<br>&nbsp You did not select any answer<br><br>";
            document.getElementById("Q1").style.backgroundColor="#ff726f";
            correct--;
        };
        
            
        if (que2 =="right"){
            document.getElementById("Q2").innerHTML="<br>&nbsp Your answer is correct<br><br>";
            document.getElementById("Q2").style.backgroundColor="#ddffab";
            correct = correct+2;
        }
        else if (que2 == "wrong"){
            document.getElementById("Q2").innerHTML="<br>&nbsp Incorrect answer. Correct answer is Vega<br><br>";
            document.getElementById("Q2").style.backgroundColor="#ff726f";
            correct--;
        }
        else {
            document.getElementById("Q2").innerHTML="<br>&nbsp You did not select any answer<br><br>";
            document.getElementById("Q2").style.backgroundColor="#ff726f";
            correct--;
        }

        if (que3 =="right"){
            document.getElementById("Q3").innerHTML="<br>&nbsp Your answer is correct<br><br>";
            document.getElementById("Q3").style.backgroundColor="#ddffab";
            correct = correct+2;
        }
        else if (que3 == "wrong") {
            document.getElementById("Q3").innerHTML="<br>&nbsp Incorrect answer. Correct answer is Willow Springs<br><br>";  
            document.getElementById("Q3").style.backgroundColor="#ff726f";
            correct--;
        }
        else {
            document.getElementById("Q3").innerHTML="<br>&nbsp You did not select any answer<br><br>";
            document.getElementById("Q3").style.backgroundColor="#ff726f";
            correct--;
        }

        if (que4 =="right"){
            document.getElementById("Q4").innerHTML="<br>&nbsp Your answer is correct<br><br>";
            document.getElementById("Q4").style.backgroundColor="#ddffab";
            correct = correct+2;
        }
        else if (que4 == "wrong"){
            document.getElementById("Q4").innerHTML="<br>&nbsp Incorrect answer. Correct answer is Four<br><br>";  
            document.getElementById("Q4").style.backgroundColor="#ff726f";
            correct--;
        } 
        else {
            document.getElementById("Q4").innerHTML="<br>&nbsp You did not select any answer<br><br>";
            document.getElementById("Q4").style.backgroundColor="#ff726f";
            correct--;
        }

        if (que5 =="right"){
            document.getElementById("Q5").innerHTML="<br>&nbsp Your answer is correct<br><br>";
            document.getElementById("Q5").style.backgroundColor="#ddffab";
            correct = correct+2;
        }
        else if (que5 == "wrong") {
            document.getElementById("Q5").innerHTML="<br>&nbsp Incorect answer. Correct answer is Amelia Earhart<br><br>"; 
            document.getElementById("Q5").style.backgroundColor="#ff726f"; 
            correct--;
        } 
        else {
            document.getElementById("Q5").innerHTML="<br>&nbsp You did not select any answer<br><br>";
            document.getElementById("Q5").style.backgroundColor="#ff726f";
            correct--;
        }

        if (que6 =="right"){
            document.getElementById("Q6").innerHTML="<br>&nbsp Your answer is correct<br><br>";
            document.getElementById("Q6").style.backgroundColor="#ddffab";
            correct = correct+2;
        }
        else if (que6 == "wrong"){
            document.getElementById("Q6").innerHTML="<br>&nbsp Incorrect answer. Correct answer is Toyota<br><br>";  
            document.getElementById("Q6").style.backgroundColor="#ff726f";
            correct--;
        }
        else {
            document.getElementById("Q6").innerHTML="<br>&nbsp You did not select any answer<br><br>";
            document.getElementById("Q6").style.backgroundColor="#ff726f";
            correct--;
        }
        
        if (que7 =="right"){
            document.getElementById("Q7").innerHTML="<br>&nbsp Your answer is correct<br><br>";
            document.getElementById("Q7").style.backgroundColor="#ddffab";
            correct = correct+2;
        }
        else if (que7 == "wrong"){
            document.getElementById("Q7").innerHTML="<br>&nbsp Incorrect answer. Correct answer is Buoyancy force<br><br>";
            document.getElementById("Q7").style.backgroundColor="#ff726f";  
            correct--;
        }
        else {
            document.getElementById("Q7").innerHTML="<br>&nbsp You did not select any answer<br><br>";
            document.getElementById("Q7").style.backgroundColor="#ff726f";
            correct--;
        }
        
        if (que8 =="right"){
            document.getElementById("Q8").innerHTML="<br>&nbsp Your answer is correct<br><br>";
            document.getElementById("Q8").style.backgroundColor="#ddffab";
            correct = correct+2;
        }
        else if(que8 == "wrong"){
            document.getElementById("Q8").innerHTML="<br>&nbsp Incorrect answer. Correct answer is Jeep<br><br>";
            document.getElementById("Q8").style.backgroundColor="#ff726f";  
            correct--;
        }
        else {
            document.getElementById("Q8").innerHTML="<br>&nbsp You did not select any answer<br><br>";
            document.getElementById("Q8").style.backgroundColor="#ff726f";
            correct--;
        }
        
        if (que9 =="right"){
            document.getElementById("Q9").innerHTML="<br>&nbsp Your answer is correct<br><br>";
            document.getElementById("Q9").style.backgroundColor="#ddffab";
            correct = correct+2;
        }
        else if (que9 == "wrong"){
            document.getElementById("Q9").innerHTML="<br>&nbsp Incorrect answer. Correct answer is Rolls-Royce<br><br>"; 
            document.getElementById("Q9").style.backgroundColor="#ff726f"; 
            correct--;
        }
        else {
            document.getElementById("Q9").innerHTML="<br>&nbsp You did not select any answer<br><br>";
            document.getElementById("Q9").style.backgroundColor="#ff726f";
            correct--;
        }

        if (que10 =="right"){
            document.getElementById("Q10").innerHTML="<br>&nbsp Your answer is correct<br><br>";
            document.getElementById("Q10").style.backgroundColor="#ddffab";
            correct = correct+2;
        }
        else if (que10 == "wrong"){
            document.getElementById("Q10").innerHTML="<br>&nbsp Incorrect answer. Correct answer is Italy<br><br>";  
            document.getElementById("Q10").style.backgroundColor="#ff726f";
            correct--;
        }    
        else {
            document.getElementById("Q10").innerHTML="<br>&nbsp You did not select any answer<br><br>";
            document.getElementById("Q10").style.backgroundColor="#ff726f";
            correct--;
        }
        
        if (correct<0){     //display 0 if the total goes below 0 too
            correct = 0;
        }
        document.getElementById("total-marks").innerHTML="You scored "+ correct + "/20 marks<br><br>";  //display marks

        if(totalseconds>0){     //display time remaining
            document.getElementById("time_remaining").innerHTML="You have completed the quiz in "+ (1 - Math.floor(mins))+" minute "+(59 - Math.floor(seconds))+" seconds";
        }
        else{                   //Time over alert
            alert("YOUR TIME IS OVER.");
            document.getElementById("time_remaining").innerHTML="Your time is over";
        }    
        if (correct>=10){   //change background color
            document.getElementById("report").style.backgroundColor="lightgreen";
            document.getElementById("emojicor").style.display = "";
        }
        else {              //change background color
            document.getElementById("report").style.backgroundColor="#ff0000";    
            document.getElementById("emojiwro").style.display = "";            

        }
        document.getElementById("done").hidden = true;      //hide submit btn
        document.getElementById("again").style.display = '';    //show paly again btn
};

function rest(){        //function for play again   
    location.reload();
}

window.onscroll = function(){   //Back to top
if(document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300){
  document.getElementById('b2t').style.display=""
}
else{
  document.getElementById('b2t').style.display="none";
}
};