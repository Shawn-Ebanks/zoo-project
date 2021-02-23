var today= prompt('What is your time');
var hourNow = today;


function getGreeting(time){
    if (hourNow >= 18) {
        return 'Good evening!';
    }
    else if (hourNow >= 12) {
        return 'Good afternoon!';
    }
    else if (hourNow >= 0) {
        return 'Good morning!';
    } else {
        return 'Welcome!';
   
} 
}

document.write('<h3>' + getGreeting(hourNow) + '</h3>');

