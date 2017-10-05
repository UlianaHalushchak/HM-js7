# HM-js7

DOM BOM

Task 1
 http://UlianaHalushchak.github.io/HM-js7
Task 2 
 https://jsfiddle.net/UlianaGalushchak/531skt1q/
Task 3
 https://jsfiddle.net/UlianaGalushchak/zLw7w0aq/
Task 4
 https://ulianahalushchak.github.io/Localization-task/

Task 5

preventDefault: Скасовує подію, якщо вона може бути скасована, не припиняючи подальшого поширення події.
stopPropagation: запобігає подальшому поширенню поточної події.

Event.preventDefault

Давайте розглянемо приклад коду. Ми знаємо, що натискання кнопки "Відправити" на форму надсилає її обробнику форми. Event.preventDefault - ідеальний спосіб не надсилати форму, коли натискається кнопка відправки.

<form id = "myForm" action = "/ my-handling-form-page" method = "post">
    <div>
        <label for = "name"> Назва: </ label>
        <input type = "text" id = "name" />
    </ div>
    <div>
        <label for = "mail"> E-mail: </ label>
        <input type = "email" id = "mail" />
    </ div>
    <div>
        <label for = "msg"> Повідомлення: </ label>
        <textarea id = "msg"> </ textarea>
    </ div>
    
    <div class = "button">
        <button type = "submit"> Надіслати повідомлення </ button>
    </ div>
</ form>
$ ('# myForm'). on ('submit', function (e) {
    e.preventDefault (); // Тепер нічого не станеться
});
Event.preventDefault гарантує, що форма ніколи не буде представлена, але вона не контролює та не забороняє подавати чи натискати подію після переміщення. Саме тоді застосовується Event.stopPropagation.

Event.stopPropagation гарантує, що подія більше не пузирує. Давайте розглянемо інший приклад коду:

<div class = "container">
    <a href="#" class="element"> Натисніть менe! </a>
</ div>
$ ('. container'). on ('click', function (e) {
    console.log ('container was clicked');
});

$ ('. element'). on ('click', function (e) {
    e.preventDefault (); // Тепер посилання нікуди не піде
    console.log ('elenent was clicked');
});
Тепер, якщо ви натиснете посилання, відкривши консоль, ви побачите:

"елемент був натиснутий"
"контейнер натиснуто"
Тепер давайте додамо Event.stopPropagation:

$ ('. container'). on ('click', function (e) {
    console.log ('container was clicked');
});

$ ('. element'). on ('click', function (e) {
    e.preventDefault (); // Тепер посилання нікуди не піде
    e.stopPropagation (); / / Зараз ця подія не буде пузирити
    console.log (елемент натиснуто);
});
Д
авайте поставимо останній варіант використання, який може виявитися складним.

Ми почнемо з аналогічної розмітки, за винятком, що ми надамо прив'язку до двох класів. Загальний, елемент, який всі якоря в цій області отримає, і конкретний, елемент, що дуже важливо для нашої програми для роботи.

<div class = "container">
    <a href="#" class="item element"> Натисніть менe! </a>
</ div>
І ми додамо нашу вишукану Event.stopPropagation

$ ('. item'). on ('click', function (e) {
    console.log ('element was clicked');
});

$ ('. element'). on ('click', function (e) {
    e.preventDefault (); // Тепер посилання нікуди не піде
    e.stopPropagation (); / / Зараз ця подія не буде пуздити
    console.log (елемент натиснуто);
});
Але, коли ми натискаємо елемент, що ми бачимо:

"елемент натиснуто"
"елемент був натиснутий"
Проблема полягає в тому, що елемент і елемент рівномірно розподіляються в DOM. Це не так, якби він стикається з елементом, а потім пузирує до контейнера, як ми бачили в останньому прикладі. Оскільки подію кліків спрацьовує як на елементі, так і на елементі одночасно, ви не можете зупинити створення, що і слід було очікувати. Тоді потрібно застосовувати stopImmediatePropagation.


