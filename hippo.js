const scanf = require("scanf");


// ------- Hippopotamus class --------------
class Hippopotamus {

    constructor(name, weight, tuskSize){
        this.name = name;
        if(weight < 0) {
            throw "Poor Hippo, it's dead already !" ;
        }else{
            this.weight = weight;
        }
        this.tuskSize = tuskSize;
    }

    swim(){
        this.weight -= 0.3;
    }

    eat(){
        this.weight+=1;
    }

    fight(otherHippo){
        this.tuskSize > otherHippo.tuskSize 
        ? console.log("You won !")
        : console.log("Opponent won !"); 
    }
}
// -----------------------------------------------


// --- Hippo life cycle --------------------------
// myHippo : object Hippopotamus
// duration : time in weeks
function hippolifecycle(myHippo, duration) {
    for (let w = 0 ; w < duration ; w++){
        // --- in a week 
        console.log(`In week for loop. w = ${w}`);
        for (let d = 0 ; d < 7 ; d++){
            console.log(`In day for loop. d = ${d}`);
            // -- a day
            for (let h = 0 ; h < 24 ; h++){
                myHippo.eat();
                myHippo.eat();
                myHippo.swim();
                myHippo.swim();
                myHippo.swim();
                console.log(`In hour for loop. h = ${h}`);
                console.log(myHippo.toString());
            }
        }
    }
   

}
// -----------------------------------------------


// --- override toString method for Hippos -------
Hippopotamus.prototype.toString = function () {
    return `Name : ${this.name}
    Weight : ${this.weight}
    Tusk size : ${this.tuskSize}`;
}
// -----------------------------------------------



// --- creating instances -----------------------
let myHippo = new Hippopotamus("Toto", 5, 10);
let yourHippo = new Hippopotamus("Tutu", 450, 12);
// -----------------------------------------------


// --- fight test --------------------------
myHippo.fight(yourHippo);
// -----------------------------------------



// creating a hippo
console.log(`Hello friends. Let's create a Hippo !
Enter the name, Weight and Tusk Size : `);
let newHippo = new Hippopotamus(scanf("%s"), scanf("%d"), scanf("%d"));
console.log(newHippo.toString());

hippolifecycle(newHippo, 1);


