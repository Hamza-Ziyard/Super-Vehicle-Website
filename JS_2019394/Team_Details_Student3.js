document.getElementById("st1").addEventListener("mouseover", function(){    //display student name and role
    document.getElementById("name").innerHTML = "Sudesh Dilshan";
    document.getElementById("role").innerHTML = "STUDENT 1<br><span>(Click on image for more details)</span>";
    document.getElementById("selection").style.background="#ffffff";
    document.getElementById("selection").style.border="1px solid #ff0000";
    document.getElementById("st1").style.transform = "scale(1.1)";
});

document.getElementById("st2").addEventListener("mouseover", function(){    //display student name and role
    document.getElementById("name").innerHTML = "Hamza Ziyard";
    document.getElementById("role").innerHTML = "STUDENT 2<br><span>(Click on image for more details)</span>";
    document.getElementById("selection").style.background="#ffffff";
    document.getElementById("selection").style.border="1px solid #ff0000";
    document.getElementById("st2").style.transform = "scale(1.1)";
});

document.getElementById("st3").addEventListener("mouseover", function(){    //display student name and role
    document.getElementById("name").innerHTML = "Ashfaaq Ahamed";
    document.getElementById("role").innerHTML = "STUDENT 3<br><span>(Click on image for more details)</span>";
    document.getElementById("selection").style.background="#ffffff";
    document.getElementById("selection").style.border="1px solid #ff0000";
    document.getElementById("st3").style.transform = "scale(1.1)";
});

document.getElementById("st4").addEventListener("mouseover", function(){    //display student name and role
    document.getElementById("name").innerHTML = "Archana";
    document.getElementById("role").innerHTML = "STUDENT 4<br><span>(Click on image for more details)</span>";
    document.getElementById("selection").style.background="#ffffff";
    document.getElementById("selection").style.border="1px solid #ff0000";
    document.getElementById("st4").style.transform = "scale(1.1)";
})

document.getElementById("st1").addEventListener("mouseout", function(){     //hide student details
    document.getElementById("name").innerHTML = "";
    document.getElementById("role").innerHTML = "";
    document.getElementById("selection").style.background="";
    document.getElementById("selection").style.border="";
    document.getElementById("st1").style.transform = "scale(1.0)";
})

document.getElementById("st2").addEventListener("mouseout", function(){     //hide student details
    document.getElementById("name").innerHTML = "";
    document.getElementById("role").innerHTML = "";
    document.getElementById("selection").style.background="none";
    document.getElementById("selection").style.border="";
    document.getElementById("st2").style.transform = "scale(1.0)";
})

document.getElementById("st3").addEventListener("mouseout", function(){     //hide student details
    document.getElementById("name").innerHTML = "";
    document.getElementById("role").innerHTML = "";
    document.getElementById("selection").style.background="none";
    document.getElementById("selection").style.border="";
    document.getElementById("st3").style.transform = "scale(1.0)";
})

document.getElementById("st4").addEventListener("mouseout", function(){     //hide student details
    document.getElementById("name").innerHTML = "";
    document.getElementById("role").innerHTML = "";
    document.getElementById("selection").style.background="none";
    document.getElementById("selection").style.border="";
    document.getElementById("st4").style.transform = "scale(1.0)";
})

function openst1() {    //Display more details
    document.getElementById("details").style.display = "block";
    document.getElementById("mainpage").style.display = "none";
    document.getElementById("footer12").style.marginTop = "4.2%";
    document.getElementById("link").style.marginTop = "-5px";
    document.getElementById("aboutme").innerHTML = "More about me";
    document.getElementById("st1B").style.display=  "block";

    document.getElementById("photo").innerHTML = '<img id="identity" src = "../Images_2019394/Sudesh.jpeg">';
    document.getElementById("a1").innerHTML = ": Sudesh Dilshan";
    document.getElementById("a2").innerHTML = ": 2019470";
    document.getElementById("a3").innerHTML = ": dilshan.2019470@iit.ac.lk";
    document.getElementById("a4").innerHTML = ": B.Eng(Hons) Software Engineering";
    document.getElementById("a5").innerHTML = ": Leads";
    document.getElementById("a6").innerHTML = ": Student 1 ";
    document.getElementById("a7").innerHTML = ": Presentation | Shop | Font-size ";

}

function openst2() {        //Display more details
    document.getElementById("details").style.display = "block";
    document.getElementById("mainpage").style.display = "none";
    document.getElementById("footer12").style.marginTop = "4.2%";
    document.getElementById("link").style.marginTop = "-5px";
    document.getElementById("aboutme").innerHTML = "More about me";
    document.getElementById("st2B").style.display=  "block";

    document.getElementById("photo").innerHTML = '<img id="identity" src = "../Images_2019394/hamza.jpeg">';
    document.getElementById("a1").innerHTML = ": Hamza Ziyard";
    document.getElementById("a2").innerHTML = ": 2029407";
    document.getElementById("a3").innerHTML = ": hamza.2019407@iit.ac.lk";
    document.getElementById("a4").innerHTML = ": B.Eng(Hons) Software Engineering";
    document.getElementById("a5").innerHTML = ": Zahira College Colombo";
    document.getElementById("a6").innerHTML = ": Student 2";
    document.getElementById("a7").innerHTML = ": Main page | Feedback form ";

}

function openst3() {        //Display more details
    document.getElementById("details").style.display = "block";
    document.getElementById("mainpage").style.display = "none";
    document.getElementById("footer12").style.marginTop = "4.2%";
    document.getElementById("link").style.marginTop = "-5px";
    document.getElementById("aboutme").innerHTML = "More about me";
    document.getElementById("st3B").style.display=  "block";

    document.getElementById("photo").innerHTML = '<img id="identity" src = "../Images_2019394/AshfaaqRE1.jpeg">';
    document.getElementById("a1").innerHTML = ": Ashfaaq Ahamed";
    document.getElementById("a2").innerHTML = ": 2019394";
    document.getElementById("a3").innerHTML = ": ashfaaq.2019394@iit.ac.lk";
    document.getElementById("a4").innerHTML = ": B.Eng(Hons) Software Engineering";
    document.getElementById("a5").innerHTML = ": Zahira College Colombo";
    document.getElementById("a6").innerHTML = ": Student 3";
    document.getElementById("a7").innerHTML = ": Quiz page | Team details page";

}

function openst4() {        //Display more details
    document.getElementById("details").style.display = "block";
    document.getElementById("mainpage").style.display = "none";
    document.getElementById("footer12").style.marginTop = "4.2%";
    document.getElementById("link").style.marginTop = "-5px";
    document.getElementById("aboutme").innerHTML = "More about me";
    document.getElementById("st4B").style.display=  "block";

    document.getElementById("photo").innerHTML = '<img id="identity" src = "../Images_2019394/Archana.jpeg">';
    document.getElementById("a1").innerHTML = ": Archana Harankahawatta";
    document.getElementById("a2").innerHTML = ": 2019300";
    document.getElementById("a3").innerHTML = ": archana.2019300@iit.ac.lk";
    document.getElementById("a4").innerHTML = ": B.Eng(Hons) Software Engineering";
    document.getElementById("a5").innerHTML = ": Dharmapala Vidyalaya Pannipitiya";
    document.getElementById("a6").innerHTML = ": Student 4";
    document.getElementById("a7").innerHTML = ": Gallery | Sitemap";

}

function goBack() {     //Back button
    document.getElementById("details").style.display = "none";
    document.getElementById("mainpage").style.display = "";    
    document.getElementById("footer12").style.marginTop = "3.5%";
    document.getElementById("link").style.margin = "auto";        
}