function distance(x1,y1,x2,y2) {
    return (Math.sqrt(pow(x2-x1,2)+pow(y2-y1,2)))
}
function angbtw(x1,y1,x2,y2){
    return atan2(y2-y1, x2-x1)*180/PI;
}
function sina(a){
    return sin(a*PI/180)
}
function cosa(a){
    return cos(a*PI/180)
}
function dline(x,y,a,d){
    line(x,y,x+d*cosa(a),y+d*sina(a))
}

function inrange(x,y,w,h,x1,y1){ // in box range
    if(x1>x&&x1<x+w&&y1>y&&y1>y+h){return true} else {return false}
}
function incrange(x,y,r,x1,y1){ // in circular range
    if(distance(x,y,x1,y1)<=r){return true} else {return false}
}


function shortAngleDist(a0,a1) {
    var max = Math.PI*2;
    var da = (a1 - a0) % max;
    return 2*da % max - da;
}

function anglelerp(a0,a1,t) {
    return a0 + shortAngleDist(a0,a1)*t;
}