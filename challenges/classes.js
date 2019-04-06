// 1. Copy and paste your prototype in here and refactor into class syntax.

//NOTE: I had to change the CuboidMaker class name to avoid an error encountered when using index.html. Basically it won't let you give two functions the exact same name of CuboidMaker 
class CuboidMakerClass{
    constructor(length,width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.length*this.width*this.height
    }
    surfaceArea(){
        return 2*(this.length*this.width + this.length*this.height + this.width*this.height);
    }
}
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
var cuboid = new CuboidMakerClass(4,5,5);

console.log("Test for classes.js");
console.log("cuboid Volume:",cuboid.volume()); // 100
console.log("cuboid Surface Area:",cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerClass{
    constructor(length){
        super(length,length,length);
    }
}

/*
You could recreate the SurfaceArea methods but it seems excessive, since the Surface area formula and the volume formula for a rectangular solid should still work for a cube.
*/

var cube = new CubeMaker(5);

console.log ("Stretch Task for classes.js: Cube")
console.log("Volume for Cube 5x5x5",cube.volume());//should be 125 for cube of side 5
console.log("Surface Area for Cube 5x5x5",cube.surfaceArea()); //for cube of side 5, should be 150