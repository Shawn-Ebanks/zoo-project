let age = prompt('What is your age?');
let message2;

function discount(valid){
    if (age <= 12) {
        return 'Entry for kids is free!';}
    else if (age >= 13) {
        return('Your discount code is 8313, valid for 15 days.')
}

}
document.write('<footer>'+ discount(age) + '</footer>');  