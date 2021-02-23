// check if window is loaded = best practices

window.addEventListener("load", function(){

    // initialize counter
    let count = 0;
    // -----------------------------------------------



    // counter goes from 0 to 4 and then 0 and so on
    setInterval( () => { 
        if (count === 4){
            count = 0;
        }else{
            count++;
        }
    }, 5000);
    // -----------------------------------------------



    // words array
    let words = ["blue", "red", "green", "yellow", "orange"];

    // store the button in a variable
    let myBtn  = document.querySelector("button");
    // -----------------------------------------------




    // event listener : when button clicked, change text and background color
    myBtn.addEventListener("click", () => {

        document.querySelector("h1").innerHTML = words[count];
        document.body.style.backgroundColor = words[count].toString();
    
    });
    // -----------------------------------------------

})

