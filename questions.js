// what is the time message //

var today= prompt('What is the time?');
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
        return 'Welcome!';}
    }
   document.write('<h3>' + getGreeting(hourNow) + '</h3>');


// Doscount Greeting //

let age = prompt('How old are you?');
let message2;

function discount(valid){
    if (age <= 12) {
        return 'Entry for kids is free!';}
    else if (age >= 13) {
        return('Your discount code is 8313, valid for 15 days.')
}
}
document.write('<footer>'+ discount(age) + '</footer>');  



// Mood message //

let mood = prompt('How are are you feeling on a scale from 1-10?');

function vibe(feeling){
if (mood <= 5) {
return 'Glad you are feeling awesome!';}

else if (mood >= 6) {
    return 'No worries, we can fix that';
}
}

document.write('<p>' + vibe(mood) +'</p>');   



 // Loop prompt for user name //


 function getUserName() {
    let myName = prompt("Enter your name");
    while (myName === "") {
      myName = prompt("Enter your name");
    }
    if (myName === null) {
      myName = "Not Entered";
    }
    document.getElementById("name-display").innerHTML = myName;
  }
  
  getUserName();


   
function getEmail() {
    let userEmail = prompt("Enter your email");
    While (userEmail ==="") 
        userEmail = prompt("Enter your email");
    }
    if (userEmail === null) {
        userEmail = "Required field";
    }
    document.getElementById(email-form).innerHTML = userEmail;


getEmail();

