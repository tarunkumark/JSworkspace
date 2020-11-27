const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particlesArray=[];


class Particle {
    constructor(positionX, positionY, ){
        this.positionX=positionX;
        this.positionY=positionY;
        this.size=10;
        this.weight = 2;
        this.directionX = 1;
        this.directionY = 1;
    }
}