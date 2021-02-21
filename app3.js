let age = prompt('What is your age?');
let message2;

if (age < 12) {message2 = ' Entry for kids is free!';}
else if (age > 12) {message2 = 'See our discount code at the bottom of this page';}
else {message2}

document.write('<p> You are going to have a great time   ' + message2 +'</p>');  