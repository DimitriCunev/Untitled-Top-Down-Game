let keys = {}

let inputAxis = {x:0,y:0,angle:0}

function keyPressed(){
    if(myid){
        keys[(String.fromCharCode(keyCode)).toLowerCase()] = 1

    }
}

function keyReleased(){
    if(myid){
        keys[(String.fromCharCode(keyCode)).toLowerCase()] = 0

    }
}

function checkInput(){
    if(myid){
        if(keys.w&&!keys.a&&!keys.d){inputAxis.y = -1;inputAxis.x = 0}
        if(keys.s&&!keys.a&&!keys.d){inputAxis.y = 1;inputAxis.x = 0}
        if(keys.a&&!keys.w&&!keys.s){inputAxis.x = -1;inputAxis.y = 0}
        if(keys.d&&!keys.w&&!keys.s){inputAxis.x = 1;inputAxis.y = 0}
        if(keys.w&&keys.a&&!keys.d){inputAxis.y = -cosa(45);inputAxis.x = -cosa(45)}
        if(keys.w&&!keys.a&&keys.d){inputAxis.y = -cosa(45);inputAxis.x = cosa(45)}
        if(keys.s&&keys.a&&!keys.d){inputAxis.y = cosa(45);inputAxis.x = -cosa(45)}
        if(keys.s&&!keys.a&&keys.d){inputAxis.y = cosa(45);inputAxis.x = cosa(45)}
        if(!keys.s&&!keys.w&&!keys.a&&!keys.d){inputAxis.y = 0;inputAxis.x = 0}
        inputAxis.angle = angbtw(0,0,inputAxis.x,inputAxis.y)


    }
}