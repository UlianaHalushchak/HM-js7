var x = document.getElementById("form_sample");
var createform = document.createElement('form'); 
createform.setAttribute("action", "google.com"); 
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
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var agelabel = document.createElement('label'); 
agelabel.innerHTML = "Your age : ";
createform.appendChild(agelabel);

var agelement = document.createElement('input'); 
agelement.setAttribute("type", "text");
agelement.setAttribute("name", "name");
createform.appendChild(agelement);

var agebreak = document.createElement('br');
createform.appendChild(agebreak);

var datalabel = document.createElement('label'); 
datalabel.innerHTML = "Data : ";
createform.appendChild(datalabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); 
submitelement.setAttribute("type", "Submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Validate Me");
createform.appendChild(submitelement);




