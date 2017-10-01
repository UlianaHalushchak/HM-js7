
var f = document.createElement("form");
f.setAttribute('method',"post");
f.setAttribute('action',"submit.php");

//create input element
var i = document.createElement("input");
i.type = "text";
i.name = "user_name";
i.id = "user_name1";

//create a checkbox
var c = document.createElement("input");
c.type = "checkbox";
c.id = "checkbox1";
c.name = "check1";

//create a button
var s = document.createElement("input");
s.type = "submit";
s.value = "Submit";

// add all elements to the form
f.appendChild(i);
f.appendChild(c);
f.appendChild(s);

// add the form inside the body
/* $("body").append(f); using jQuery or */
 
document.getElementsByTagName('body')[0].appendChild(f);


// повідомлення про помилки //
input.validity = {  
  valid: false 
  customError: false 
  patternMismatch: false 
  rangeOverflow: false 
  rangeUnderflow: true 
  stepMismatch: true 
  tooLong: false 
  tooShort: false 
  typeMismatch: false 
  valueMissing: false 
};


function CustomValidation() { }

CustomValidation.prototype = {
  invalidities: [],
  checkValidity: function(input) {
    var validity = input.validity;
    if (validity.patternMismatch) {
      this.addInvalidity('This is the wrong pattern for this field');
    }

    if (validity.rangeOverflow) {
      var max = getAttributeValue(input, 'max');
      this.addInvalidity('The maximum value should be ' + max);
    }

    if (validity.rangeUnderflow) {
      var min = getAttributeValue(input, 'min');
      this.addInvalidity('The minimum value should be ' + min);
    }

    if (validity.stepMismatch) {
      var step = getAttributeValue(input, 'step');
      this.addInvalidity('This number needs to be a multiple of ' + step);
    }    
  },

  
  addInvalidity: function(message) {
    this.invalidities.push(message);
  },

 
  getInvalidities: function() {
    return this.invalidities.join('. \n');
  }
};


submit.addEventListener('click', function(e) {
    for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    
    if (input.checkValidity() == false) {
      var inputCustomValidation = new CustomValidation(); 
      inputCustomValidation.checkValidity(input); 
      var customValidityMessage = inputCustomValidation.getInvalidities(); 
      input.setCustomValidity(customValidityMessage); 

    } 
  } 
});


CustomValidation.prototype.getInvaliditiesForHTML = function() {
  return this.invalidities.join('. <br>');
}


submit.addEventListener('click', function(e) {
   for (var i = 0; i < inputs.length; i++) {
   var input = inputs[i];
         
     if (input.checkValidity() == false) {
     
       var inputCustomValidation = new CustomValidation(); 
      inputCustomValidation.checkValidity(input); 
      var customValidityMessage = inputCustomValidation.getInvalidities(); 
      input.setCustomValidity(customValidityMessage); 
      
      var customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
      input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
      stopSubmit = true;

    } 
  } 

  if (stopSubmit) {
    e.preventDefault();
  }
});

CustomValidation.prototype.checkValidity = function(input) {
   
  if (!input.value.match(/[a-z]/g)) {
    this.addInvalidity('At least 1 lowercase letter is required');
  }

  if (!input.value.match(/[A-Z]/g)) {
    this.addInvalidity('At least 1 uppercase letter is required');
  }
};

