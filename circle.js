const pointObject = require("./point");



class Circle {

    constructor(circleX, circleY, radius){

        // --- checking if coordinates are integers ----------------
        if ( !Number.isInteger(circleX) || !Number.isInteger(circleY) || !Number.isInteger(radius)){
            throw "You must enter two integers !";
        }
        // -----------------------------------------------



        // --initialize attributes-------------------------
        this.circleX = circleX;
        this.circleY = circleY;
        this.radius = radius;
        // -----------------------------------------------
    }



    area(){
        return Math.PI*radius**2;
    }

    containsPoint(xPoint, yPoint){
        distanceX = Math.abs(xPoint - this.circleX);
        distanceY = Math.abs(yPoint - this.circleY);
        // not finished yet
    }


}

// --- override toString method for Circle -------
Circle.prototype.toString = function () {
    return `Center Coordinates : (${this.circleX}, ${this.circleY})
    Radius : ${this.radius}`;
}
// -----------------------------------------------

myCircle = new Circle(2,5,5);
myPoint = new Point(1,1);
console.log(myCircle.toString());