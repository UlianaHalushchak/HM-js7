var x = document.getElementById("form_sample");
var createform = document.createElement('form'); 
createform.setAttribute("action", "https://www.google.com.ua"); 
createform.setAttribute("method", "post"); 
x.appendChild(createform);

var heading = document.createElement('h2'); 
heading.innerHTML = "Validation Form ";
createform.appendChild(heading);

var line = document.createElement('hr'); 
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); 
namelabel.innerHTML = "Your Name : "; 
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); 
inputelement.setAttribute("type", "text");
inputelement.setAttribute("id", "name");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var agelabel = document.createElement('label'); 
agelabel.innerHTML = "Your age : ";
createform.appendChild(agelabel);

var agelement = document.createElement('input'); 
agelement.setAttribute("type", "text");
agelement.setAttribute("id", "age");
createform.appendChild(agelement);

var agebreak = document.createElement('br');
createform.appendChild(agebreak);

var datalabel = document.createElement('label'); 
datelabel.innerHTML = "Data : ";
createform.appendChild(datelabel);

var dataelement = document.createElement('input'); 
dateelement.setAttribute("type", "text");
dateelement.setAttribute("id", "date");
createform.appendChild(dataelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); 
submitelement.setAttribute("type", "Submit");
submitelement.setAttribute("name", "submit");
submitelement.setAttribute("value", "Validate Me");
createform.appendChild(submitelement);

function checkAge() {
	checkAgeEntering=document.getElementById("age").value;

	if (checkAgeEntering === "") {
   	    document.getElementById("age").style.border = "2px solid green";
        alert("Please, enter number!");
        return false;
    }
    else if (~checkAgeEntering.indexOf(" ")) {
 		document.getElementById("age").style.border = "2px solid green";
        alert("You entered "+checkAgeEntering+". Enter a number,please!");
 		return false;
	}
    else if(parseInt(checkAgeEntering) < 0) {
   	    document.getElementById("age").style.border = "2px solid green";
        alert("You entered "+checkAgeEntering+". Enter a number,please!");
        return false;
    }
    else if(isNaN(checkAgeEntering)) {
    	document.getElementById("age").style.border = "2px solid green";
    	alert("You entered "+checkAgeEntering+". Enter a number,please!");
    	return false;
    }
    else if (~checkAgeEntering.indexOf("e")) {
 		document.getElementById("age").style.border = "2px solid green";
        alert("You entered "+checkAgeEntering +". Enter a number,please!");
 		return false;
	}

    else if(parseInt(checkAgeEntering) >= 0) {
        document.getElementById("age").style.border = "2px solid #80ff00";
		return true;
    }
    else {
        return false;
    }
}

function checkUser() {
	checkUserEntering=document.getElementById("name").value;
    userStart="user_";
    userEnter=checkUserEntering[0]+checkUserEntering[1]+checkUserEntering[2]+checkUserEntering[3]+
    checkUserEntering[4];

    if (checkUserEntering==="") {
    	document.getElementById("username").style.border = "2px solid green";
    	alert("Please enter a username starts with user_");
        return false;
    }
    

function checkDate() {
	checkDateEntering=document.getElementById("date").value;
	submitOK = "true";
     
    currentDate = new Date();
	dd = currentDate.getDate();
	mm = currentDate.getMonth()+1; //January is 0!
	yyyy = currentDate.getFullYear();

	if(dd<10){
	    dd='0'+dd;
	} 
	if(mm<10){
	    mm='0'+mm;
	} 
	currentDate= dd+'/'+mm+'/'+yyyy;

	if (checkDateEntering==="") {
		document.getElementById("date").style.border = "2px solid green";
    	alert("Enter a current date in format dd/mm/yyyy !");
        return false;
	}
	else if(checkDateEntering===currentDate) {
		document.getElementById("date").style.border = "2px solid #80ff00";
		return true;
	}



