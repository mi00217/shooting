document.getElementById("txt").innerText="これはゲームです";
const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");
const player={
    x:canvas.width/2-15,
    y:canvas.height-60,
    width:30,
    height:30,
    color:"yellow",
    life:3,
};
const bullets=[];
const BULLET_SPEED=-10;

function tryShoot(){
    bullets.push({
        x:player.x,
        y:player.y,
        width:10,
        height:10,
        vy: BULLET_SPEED,
    })
}





window.addEventListener("keydown",(e) =>{
    if(e.key==="ArrowLeft"){
        x -=10;
    } else if(e.key==="ArrowRight"){
        x +=10;
    } else if(e.key==="ArrowUp"){
        //上キーが押されたときの処理
        x -=10;
    } else if(e.key==="ArrowDown"){
        //下キーが押されたときの処理
        x +=10;
    }else if(e.key==="Space"){
        tryShoot();
    }
});

let y =0;
let z=-150;
function update(){
    for(let i=0;i<bullets.length;i++){
        const bullet=bullets[i];
        bullet.y += bullet.vy;
        if(bullet,y<0){
            bullets.splice(i,1);
        }
    }
}
let y=0;
let z=-150;
function gameLoop(){
 ctx.fillStyle="black";
 ctx.fillRect(0,0,canvas.width,canvas.height);  

 ctx.fillStyle="red";
 ctx.fillRect(300,y,30,30);
    y +=2;
 ctx.fillStyle="red";
 ctx.fillRect(90,y2,30,30);
    y2 +=2;   
 ctx.fillStyle="blue";
 ctx.fillRect(x,480,30,30);
    

    update();
    draw();
    requestAnimationFrame(gameLoop);
}
gameLoop();
    
