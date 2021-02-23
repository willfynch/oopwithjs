class Point {


    constructor(cooX, cooY){

        // --- checking if coordinates are integers ----------------
        if ( !Number.isInteger(cooX) || !Number.isInteger(cooY) ){
            throw "You must enter two integers !";
        }
        // -----------------------------------------------



        // --initialize attributes-------------------------
        this.cooX = cooX;
        this.cooY = cooY;
        // -----------------------------------------------
    }




    // -- getters and setters   -------------------------



    // -- for x -------------------------
    get getX() {
        return this.cooX;
    }
    set setX(cooX) {
        this.cooX = cooX;
    }
    // -----------------------------------------------



     // -- for y -------------------------
    get getY() {
        return this.cooY;
    }
    set setY(cooY) {
        this.cooY = cooY;
    }
    // -----------------------------------------------
}


// --- override toString method for Point -------
Point.prototype.toString = function () {
    return `Coordinates : (${this.cooX}, ${this.cooY})`;
}
// -----------------------------------------------


let myPoint = new Point(2,8);
console.log(myPoint.toString());


module.exports = Point;
