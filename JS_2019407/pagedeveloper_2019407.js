 //not displaying any details
 document.getElementById("details_card").style.display="none";

 //display deatils when bring mouse over image
 document.getElementById("image").addEventListener("mouseover", function(){
                             document.getElementById("details_card").style.display = "";
                                                                          });
 //not display details when move mouse out of image
 document.getElementById("image").addEventListener("mouseout", function(){
                             document.getElementById("details_card").style.display="none";
                                                                         });
 //blocks image and show only details onn mouseover
 document.getElementById("details_card").addEventListener("mouseover", function(){
                             document.getElementById("details_card").style.display="";
                                                                                 });
 //blocks details on mouseout                                                                               
 document.getElementById("details_card").addEventListener("mouseout", function(){
                             document.getElementById("details_card").style.display="none";
                                                                                });