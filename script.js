
var form = document.createElement('form')
form.name = 'login';
form.action = 'google.com';
form.id = 'validateForm';

var input1 = document.createElement('input');
input1.type = 'text';
input1.name = 'username';
input1.placeholder = 'username';


var input2 = document.createElement('input');
input2.type = 'text';
input2.name = 'date';
input2.placeholder = 'DD.MM.YYYY';

var input3 = document.createElement('input');
input3.type = 'text';
input3.name = 'age';
input3.placeholder = 'age';

var input4 = document.createElement('input');
input4.type = 'submit';
input4.value = 'Validate Me';
