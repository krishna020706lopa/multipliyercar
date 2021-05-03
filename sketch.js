var hytnoticBall,database

function setup(){
    createCanvas(500,500);
    hytnoticBall = createSprite(250,250,10,10);
    hytnoticBall.shapeColor = "red";
    database = firebase.database();
    console.log(database);
    var hypnoticBallposition=database.ref("ball/position");
    hypnoticBallposition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
 database.ref('ball/position').set({ 
     'x': position.x + x ,
     'y': position.y + y
     })
     }

function readPosition(data){
    position=data.val();
    hytnoticBall.x=position.x;
    hytnoticBall.y=position.y;
}

function showError(){
    console.log("Error in writing to the database");
  }
