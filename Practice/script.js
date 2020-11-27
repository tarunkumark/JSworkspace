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
    update(){
        if(this.positionY > canvas.height) {
            this.positionY= 0 - this.size;
            this.weight=2;
            this.positionX=Math.random()  * canvas.width;
        }
        this.weight+=0.05;
        this.positionY+=this.weight;
        this.positionX+=this.directionX;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.positionX,this.positionY, this.size, 0, Math.PI *2);
        ctx.closePath();
        ctx.fill();
    }


}
const particle1 = new Particle(400, 100);


function animate(){
    ctx.fillStyle='rgba(255,255,255,0.1)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    particle1.update();
    particle1.draw();
    requestAnimationFrame(animate);
} 
animate();