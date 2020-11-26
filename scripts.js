const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

ctx.globalCompositeOperation = 'destination-over';


let number = 0;
let scale = 5;

let hue=Math.random()*360;

function drawFlower(){
    let angle = number * 4;
    let radius = scale * Math.sqrt(number);
    let x=radius*Math.sin(angle) + canvas.width/2;
    let y=radius*Math.cos(angle) + canvas.height/2;

    ctx.fillStyle='hsl('+ hue +',100%,50%)';
    ctx.strokeStyle='black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x,y,number,0,Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    number++;
    hue+=1;
     
    
}
function animate(){
    //draw each frame
    drawFlower();
    if(number>100) return;
    requestAnimationFrame(animate);
   
}
animate();