export const enemies=[];
const SIZE = 26;

function pushEnemies(canvas){
    const w=SIZE;
    const h=SIZE;
    const x=Math.random()*(canvas.width - w);
    const y=-h;
    const vy=5
    
    enemies.push({x,y,width:w,height:h,vy});
}

export function spawnEnemy(canvas){
    if(enemies.length < 5){
        spawnEnemy(canvas);
    }
}

//export function updateEnemies(canvas){
//    for(let i=enemies.length - 1; i >=0; i--){