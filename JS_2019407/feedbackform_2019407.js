//access to the previous page visited by the user//
function previousPage(){
    window.history.back();
       }

function displayDetails() {
          var name = document.forms["feedback"]["name"].value;
          var comment = document.forms["feedback"]["comment"].value;
          var rating=document.forms["feedback"]["rating"].value;

          //prompts if name is not given
          if ( name== "") {
                          alert("OOPS!! You haven't entered your name."); 
                          return false;
                          }
          //prompts if rating is not given 
          if ( rating== "") {
                            alert("Can you give us a rating !!!"); 
                            return false;
                            }
          //if no comment is entered
          if ( comment== "") {
                              alert("Hello "+name+"...Your feedback has been sent. You rating for our website was "+rating+". Thank you!!!"); 
                              return false;
                              }
          //if any comment is entered
          alert("Hello "+name+"...Your feedback has been sent. Your rating for our website was "+rating+" and you have commented as "+comment+". Thank you!!!");           
          return true
          }