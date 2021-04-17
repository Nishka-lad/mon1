var h1;
function setup(){
    createCanvas(1500,700);
    man=createSprite(1500/2, 650);
    h1=new Group();
}


function draw(){
background(0);
edges=createEdgeSprites();
man.bounceOff(edges);
if (keyDown(LEFT_ARROW)){
man.x+=-20;
}
if (keyDown(RIGHT_ARROW)){
    man.x+=20;
    }
    hat1();
    if (h1.isTouching(man)){
        h1.destroyEach();
    }



drawSprites();
}

function hat1(){
if (frameCount%100===0){
    h01=createSprite(Math.round(random(50,1250)),0);
    h01.velocityY=10;
    h01.lifetime=700;
    h1.add(h01);
}
}