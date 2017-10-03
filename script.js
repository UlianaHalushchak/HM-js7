function createValidationForm() {
	
	createForm=document.createElement("form");
	createForm.setAttribute("name","login");
	createForm.setAttribute("action","https://www.google.com.ua");
	document.body.appendChild(createForm);

	createTextInputs=[];
	for (var i = 0; i < 4; i++) {
		createTextInputs[i]=document.createElement("input");
		createForm.appendChild(createTextInputs[i]);
	}
	for (var j = 0; j < createTextInputs.length-1 ; j++) {
		createTextInputs[j].setAttribute("type","text");
	}
	createTextInputs[0].setAttribute("name","age");
	createTextInputs[0].setAttribute("id","age");
	createTextInputs[1].setAttribute("name","username");
	createTextInputs[1].setAttribute("id","username");
	createTextInputs[2].setAttribute("name","date");
	createTextInputs[2].setAttribute("id","date");
	createTextInputs[3].setAttribute("type","submit");
	createTextInputs[3].setAttribute("id","submit");
	createTextInputs[3].setAttribute("value","Validate Me");

    var itemLabelAge = document.createElement("Label");
    itemLabelAge.setAttribute("for", createTextInputs[0]);
    itemLabelAge.innerHTML = "Enter age: ";
    createForm.insertBefore(itemLabelAge, createTextInputs[0]);

    var itemLabelUser = document.createElement("Label");
    itemLabelUser.setAttribute("for", createTextInputs[1]);
    itemLabelUser.innerHTML = "Enter user: ";
    createForm.insertBefore(itemLabelUser, createTextInputs[1]);

    var itemLabelDate = document.createElement("Label");
    itemLabelDate .setAttribute("for", createTextInputs[2]);
    itemLabelDate .innerHTML = "Enter date: ";
    createForm.insertBefore(itemLabelDate, createTextInputs[2]);
}
createValidationForm();

function checkAge() {
	checkAgeEntering=document.getElementById("age").value;

	if (checkAgeEntering === "") {
   	    document.getElementById("age");
        alert("Enter a number, please!");
        return false;
    }
    else if (~checkAgeEntering.indexOf(" ")) {
 		document.getElementById("age");
        alert("Enter a number, please!");
 		return false;
	}
    else if(parseInt(checkAgeEntering) < 0) {
   	    document.getElementById("age");
        alert("Enter a number, please!");
        return false;
    }
    else if(isNaN(checkAgeEntering)) {
    	document.getElementById("age");
    	alert("Enter a number, please!!");
    	return false;
    }
    else if (~checkAgeEntering.indexOf("e")) {
 		document.getElementById("age");
        alert("Enter a number, please!");
 		return false;
	}

    else if(parseInt(checkAgeEntering) >= 0) {
        document.getElementById("age");
		return true;
    }
    else {
        return false;
    }
}

function checkUser() {
	checkUserEntering=document.getElementById("username").value;
    userStart="user_";
    
	
    if (checkUserEntering==="") {
    	document.getElementById("username");
    	alert("Enter your username starts with user_");
        return false;
    }
    else if ((~checkUserEntering.substr(5).indexOf(" ")) && ((userEnter)===userStart)) {
    	document.getElementById("username");
    	alert("Enter your username starts with user_");
    	return false;
    }
    else if((!(~checkUserEntering.substr(5).indexOf(" ")) && ((userEnter)===userStart)) 
    	&& (checkUserEntering.substr(5)!=="")) {
    	document.getElementById("username");
		return true;
    }
    else {
        document.getElementById("username");
    	alert("Enter your username starts with user_");
        return false;
    }
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
		document.getElementById("date");
    	alert("Enter a valid date in format dd/mm/yyyy !");
        return false;
	}
	else if(checkDateEntering===currentDate) {
		document.getElementById("date");
		return true;
	} else {
		document.getElementById("date");
    	alert("Enter a valid date in format dd/mm/yyyy");
        return false;
	}
}

function checkInputs() {
	
	agech=checkAge();
	userch=checkUser();
	datech=checkDate();

	if((agech) && (userch) && (datech)) {
		alert("Everything is valid!");
		return true;
	}
	else {
        return false;
    }
}
createForm.setAttribute("onsubmit","return checkInputs()");

