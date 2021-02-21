let mood = prompt('how are are you on a scale from 1-10?');
let message;

if (mood < 5) {message = ' be Sweet!';}
else if (mood > 5) {message = 'get better watch and see';}
else {message}

document.write('<p> It is going to   ' + message +'</p>');                            