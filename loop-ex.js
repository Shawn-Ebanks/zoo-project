function giraffePic() {
    return '<img class="giraffe" src= "https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />';
}    
    let userInput =prompt("How many giraffe pictures would you like to see?")
    while (isNaN(userInput) || userInput > 10 || userInput < 1) {
    userInput = prompt ('Oops , try a number between 1-10');    

    }
    for (let i = 0; i < userInput; i = i + 1) {
    document.write(giraffePic());
    }
