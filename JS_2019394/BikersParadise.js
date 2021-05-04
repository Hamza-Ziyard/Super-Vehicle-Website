function logo(){
    location.reload();
  }

    setTimeout(function(){
        document.getElementById("mainvdo").style.display = "none";
        document.getElementById("presentation").style.display = "";
     }, 3900);


  setTimeout(function(){
        document.getElementById("presentation").style.display = "none";
        document.getElementById("mywebpage").style.display = "";
     }, 8000);

     var slideno = 0;
        displaySlides();
        function displaySlides() {
          var i;
          var slides = document.getElementsByClassName("backgroundclass");
          for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";
          }   
          slideno++;
          if (slideno > slides.length) {slideno = 1}
          slides[slideno-1].style.display = "block";
          setTimeout(displaySlides, 5000); 
        }

  // Navigation bar

  function openNav() {
    document.getElementById("navigation_bar").style.width = "60%";
    document.getElementById("menu").innerHTML = "";
  }

  function closeNav() {
    document.getElementById("menu").innerHTML = "&#9776; Menu";
    document.getElementById("navigation_bar").style.width = "0%";
  }

  //Gallery

  var slideno = 0;
  function displayimage(imgs) {
    var expandImg = document.getElementById("img001");
    expandImg.src = imgs.src;
    document.getElementById("description").innerHTML = imgs.alt;
  }
  
  document.getElementById("specifications").style.display = "none";

  function image1(){ //Ducati Diavel
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 1,198.4 cc";
      document.getElementById("a2").innerHTML = ": 162 hp (121 kW) @ 9,250 rpm ";
      document.getElementById("a3").innerHTML = ": 17 Liters";
      document.getElementById("a4").innerHTML = ": 10 Kmpl";
      document.getElementById("a5").innerHTML = ": 6 Speed w/ bi-directional quickshifter";
      document.getElementById("a6").innerHTML = ": 272 km/h (169 mph)";
      document.getElementById("a7").innerHTML = ": $20,795 (USA Price)";
  }
  function image2(){ //Kawasaki Ninja H2R
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 998.0 cc";
      document.getElementById("a2").innerHTML = ": 310 hp (230 kW) @14,000 rpm";
      document.getElementById("a3").innerHTML = ": 17 Liters";
      document.getElementById("a4").innerHTML = ": 15 Kmpl";
      document.getElementById("a5").innerHTML = ": 6 Speed";
      document.getElementById("a6").innerHTML = ": 331–400 km/h (206–249 mph)";
      document.getElementById("a7").innerHTML = ": $ 55,000 (USA Price)";
  }
  function image3(){  // CBR 1000RR
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 999 cc";
      document.getElementById("a2").innerHTML = ": 191.7 PS @ 13000 rpm";
      document.getElementById("a3").innerHTML = ": 16.2 Liters";
      document.getElementById("a4").innerHTML = ": 18 Kmpl";
      document.getElementById("a5").innerHTML = ": 6 Speed";
      document.getElementById("a6").innerHTML = ": 286 km/h (177 mph)";
      document.getElementById("a7").innerHTML = ": $16,499  (USA Price)";
  }
  function image4(){  //Yamaha R1
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 998 cc";
      document.getElementById("a2").innerHTML = ": 200 PS @ 13500 rpm";
      document.getElementById("a3").innerHTML = ": 17 Liters";
      document.getElementById("a4").innerHTML = ": 14.45 Kmpl";
      document.getElementById("a5").innerHTML = ": 6 Speed";
      document.getElementById("a6").innerHTML = ": 293 km/h (182 mph)";
      document.getElementById("a7").innerHTML = ": $17,399 (USA Price)";
  }
  function image5(){ //Ducati Panigale
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 1103 cc";
      document.getElementById("a2").innerHTML = ": 214 hp @ 13,000 rpm";
      document.getElementById("a3").innerHTML = ": 16 Liters";
      document.getElementById("a4").innerHTML = ": 12 Kmpl";
      document.getElementById("a5").innerHTML = ": 6 Speed";
      document.getElementById("a6").innerHTML = ": 299–325 km/h (186–202 mph)";
      document.getElementById("a7").innerHTML = ": $40,000 (USA Price)";
  }
  function image6(){ //BMW S 1000RR
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 999cc";
      document.getElementById("a2").innerHTML = ": 205 hp @ 13,000 rpm";
      document.getElementById("a3").innerHTML = ": 16.5 Litres";
      document.getElementById("a4").innerHTML = ": 5.62 Kmpl";
      document.getElementById("a5").innerHTML = ": 6 Speed";
      document.getElementById("a6").innerHTML = ": 299 km/h";
      document.getElementById("a7").innerHTML = ": $16,995 (USA Price)";
  }
  function image7(){ //Apache 200
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 197.75cc ";
      document.getElementById("a2").innerHTML = ": 20.5 PS @ 8500 rpm";
      document.getElementById("a3").innerHTML = ": 12 Liters";
      document.getElementById("a4").innerHTML = ": 35 Kmpl";
      document.getElementById("a5").innerHTML = ": 5 Speed";
      document.getElementById("a6").innerHTML = ": 127 km/h";
      document.getElementById("a7").innerHTML = ": Rs 480,000 (Sri Lankan Rs)";
  }
  function image8(){  //Kawasaki Ninja
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 296 cc";
      document.getElementById("a2").innerHTML = ": 39 PS @ 11000 rpm";
      document.getElementById("a3").innerHTML = ": 17 Liters";
      document.getElementById("a4").innerHTML = ": 25 Kmpl";
      document.getElementById("a5").innerHTML = ": 6 Speed";
      document.getElementById("a6").innerHTML = ": 160 Km/h";
      document.getElementById("a7").innerHTML = ": ";
  }
  function image9(){  //KTM Duke
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 199.5 cc";
      document.getElementById("a2").innerHTML = ": 25 bhp";
      document.getElementById("a3").innerHTML = ": 10.2 Liters";
      document.getElementById("a4").innerHTML = ": 35 Kmpl";
      document.getElementById("a5").innerHTML = ": 6 Speed";
      document.getElementById("a6").innerHTML = ": 	142 Km/h";
      document.getElementById("a7").innerHTML = ": Rs 696,950 (Sri Lankan Rs)";
  }
  function image10(){  //Honda Hornet 160R
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 162.71cc";
      document.getElementById("a2").innerHTML = ": 15.09 PS @ 8500 rpm";
      document.getElementById("a3").innerHTML = ": 12 litres";
      document.getElementById("a4").innerHTML = ": 45 Kmpl";
      document.getElementById("a5").innerHTML = ": 5 Speed";
      document.getElementById("a6").innerHTML = ": 110 Km/h";
      document.getElementById("a7").innerHTML = ": Rs 426,900 (Sri Lankan Rs)";
  }
  function image11(){  //NS 200
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 199.5 cc";
      document.getElementById("a2").innerHTML = ": 18 kW (24.5 PS) @ 9750 rpm";
      document.getElementById("a3").innerHTML = ": 12 litres";
      document.getElementById("a4").innerHTML = ": 35 Kmpl";
      document.getElementById("a5").innerHTML = ": 6 Speed";
      document.getElementById("a6").innerHTML = ": 136 Km/h";
      document.getElementById("a7").innerHTML = ": Rs 549,950 (Sri Lankan Rs)";
  }
  function image12(){  //Ducati Hypermotard
      document.getElementById("specifications").style.display = "";
      document.getElementById("a1").innerHTML = ": 937ccc";
      document.getElementById("a2").innerHTML = ": 114 horsepower @ 9000 rpm";
      document.getElementById("a3").innerHTML = ": 14 Liters";
      document.getElementById("a4").innerHTML = ": 19.55 Kmpl";
      document.getElementById("a5").innerHTML = ": 6 Speed";
      document.getElementById("a6").innerHTML = ": 201 Km/h";
      document.getElementById("a7").innerHTML = ": Rs 2,175,000 (Sri Lankan Rs)";
  }

           
    /*VDO CHANGING*/
    
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
      showDivs(slideIndex += n);
      document.getElementById("vd11").pause();
      document.getElementById("vd11").currentTime = 0;
      document.getElementById("vd12").pause();
      document.getElementById("vd12").currentTime = 0;
      document.getElementById("vd13").pause();
      document.getElementById("vd13").currentTime = 0;
    }

    function start1(){
      document.getElementById("vd11").currentTime = 0;
      document.getElementById("vd11").play();
      document.getElementById("vd12").pause();
      document.getElementById("vd13").pause();
    }
    
    function start2(){
      document.getElementById("vd11").pause();
      document.getElementById("vd12").currentTime = 0;
      document.getElementById("vd12").play();
      document.getElementById("vd13").pause();
    }
    
    function start3(){
      document.getElementById("vd11").pause();
      document.getElementById("vd12").pause();
      document.getElementById("vd13").currentTime = 0;
      document.getElementById("vd13").play();
    }

    function currentSlide(n) {
      showDivs(slideIndex = n);
    }

    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var vdonametag = document.getElementsByClassName("vdodot");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < vdonametag.length; i++) {
        vdonametag[i].className = vdonametag[i].className.replace(" active", "");
      }
      x[slideIndex-1].style.display = "block";
      vdonametag[slideIndex-1].className += " active";
    }

    function cont(){
      document.getElementById("vd11").controls = true;
      document.getElementById("vd12").controls = true;
      document.getElementById("vd13").controls = true;
    }
    function remcont(){
      document.getElementById("vd11").controls = false;
      document.getElementById("vd12").controls = false;
      document.getElementById("vd13").controls = false;
    }


  //JS for feedback 

  function display() {
    var name = document.forms["fdbk"]["name"].value;
    var comment = document.forms["fdbk"]["comment"].value;
    var rating=document.forms["fdbk"]["rating"].value;
    document.getElementById("reply").hidden = "";


    if (name== ""){
      alert("Please enter your name!")
      return false;
    }

    if ( comment== ""){          
      document.getElementById("reply").style.display = "";
      var nam = name.toUpperCase();
      document.getElementById("response").innerHTML = "Hello "+nam+". <br>Your feedback has been sent.<br> Thank you for rating my page as "+rating+"!!!<br><br>THANK YOU!!!";
      return false;
    }

    else{
      document.getElementById("reply").style.display = "";
      var nam = name.toUpperCase();
      document.getElementById("response").innerHTML = "Hello "+nam+". <br>Your feedback has been sent.<br>You have commented as :<br>\""+comment+"\".<br> Thank you for rating my page as "+rating+"!!!<br><br>THANK YOU!!!"
      return false;
    }



  }
  /*reset button*/

  function rest(){
    document.getElementById("form1").reset();
    document.getElementById("reply").hidden = true;
    document.getElementById("response").innerHTML = "";
    Submit.disabled = "";
  }

  /*Back to top*/

          window.onscroll = function(){
    if(document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300){
      document.getElementById('b2t').style.display=""
    }
    else{
      document.getElementById('b2t').style.display="none";
    }
  };