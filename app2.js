let mood = prompt('How are are you on a scale from 1-10? 1 being Fantastic and 10 being Horrible');

function vibe(feeling){
if (mood <= 5) {
return 'Glad you are awesome!';}

else if (mood >= 6) {
    return 'We can fix that';
}
}

document.write('<p>' + vibe(mood) +'</p>');                            