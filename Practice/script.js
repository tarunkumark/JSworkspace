const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particlesArray=[];
const numberOfParticles = 100;

let titleElement = document.getElementById('title1');
let titleMeasurements = titleElement.getBoundingClientRect();
let title = {
    x:titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width,
    height: 10
}


class Particle {
    constructor(positionX, positionY, ){
        this.positionX=positionX;
        this.positionY=positionY;
        this.size=Math.random() * 15 + 1;
        this.weight = Math.random() * 1 + 1;
        this.directionX = -2;
    }
    update(){
        if(this.positionY > canvas.height) {
            this.positionY= 0 - this.size;
            this.weight= Math.random() * 1 + 1;
            this.positionX=Math.random()  * canvas.width * 1.3;
        }
        this.weight+=0.01;
        this.positionY+=this.weight;
        this.positionX+=this.directionX;

        if(
            this.positionX<title.x+title.width &&
            this.positionX + this.size > title.x &&
            this.positionY<title.y + title.height &&
            this.positionY + this.size > title.y
        ){
            this.positionY -= 3; 
            this.weight *= -0.5;
        }
    }
    draw(){
        ctx.fillStyle = 'purple';
        ctx.beginPath();
        ctx.arc(this.positionX,this.positionY, this.size, 0, Math.PI *2);
        ctx.closePath();
        ctx.fill();
    }


}
function init(){
    particlesArray = [];
    for(let i=0;i< numberOfParticles;i++){
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x,y));
    }
}

init();

function animate(){
    ctx.fillStyle='rgba(255,255,255,0.01)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i<particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
} 
animate();
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    titleMeasurements = titleElement.getBoundingClientRect();
    title = {
        x:titleMeasurements.left,
        y: titleMeasurements.top,
        width: titleMeasurements.width,
        height: 10
    }
    init();
});