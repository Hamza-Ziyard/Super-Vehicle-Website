//background image slideshow
var slideno = 0;
displaySlides();
function displaySlides() {
                        var i;
                        var slides = document.getElementsByClassName("bg_slide");
                        for (i = 0; i < slides.length; i++) {
                                                            slides[i].style.display = "none";
                                                            }   
                        slideno++;
                        if (slideno > slides.length) {slideno = 1}
                        slides[slideno-1].style.display = "block";
                        setTimeout(displaySlides, 5000); 
                        }

//functioning of read more button
function readMore(){
                    var dot=document.getElementById("dot");
                    var read=document.getElementById("read");
                    var rm_button=document.getElementById("read_more");
                
                    if(dot.style.display==="none"){
                                                    dot.style.display="inline";
                                                    rm_button.innerHTML="Read More--";
                                                    read.style.display="none";
                                                    }
                    else{
                        dot.style.display="none";
                        rm_button.innerHTML="--Read Less";
                        read.style.display="inline";
                        }         
                    }