document.getElementById("txt").innerText="これはゲームです";
const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");

//fillRect(x座標(横),y座標(縦),横幅,高さ縦幅) 

//自分のキャラクターに見立てて四角形をとりあえず作ってみてください。

//width="480" height="640"
let x=225;

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
    }
       
});
let y=0;
let y2=-150;
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
    requestAnimationFrame(gameLoop);

}
gameLoop();