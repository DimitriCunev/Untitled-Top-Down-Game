
let interpolationRate = 6
let ticks = 16


let me
let players = {}
let objects = []

function updateGameObjects(){
    for (let [key, value] of Object.entries(players)) {
        players[key].display()
    }
    if (myid){
        me.display()
        //me.devMode()
        me.update()
        
    }
}

const gameData = {
    version:'X1.0'
}

class gameObject{
    constructor(data){
        this.id = data.id
        this.options = data.options
        this.x = data.x
        this.y = data.y
        
    }

    syncFirst(protocol,data){
        sendData(data)
    }
}

class localPlayer extends gameObject{
    constructor(data){
        super(data)
        this.inventory = data.inventory
        this.level = data.level
        this.popTabs = data.popTabs
        this.syncData = {x:this.x,y:this.y}

        this.maxSpeed = 4
        this.accx = 0
        this.accy = 0
        this.currentAngle = 1
        this.moving = false
        sync({name:'px',data:round(this.x)},{name:'py',data:round(this.y)})
        // this.devMode =()=>{
        //     stroke(0)
        //     text(`GameObject:\n${this.id}\nlocalPlayer`,this.x+25,this.y)
        // }
    }
    display(){
        fill(0)
        circle(this.x,this.y,30)
    }

    update(){
        
        if(inputAxis.x||inputAxis.y){this.moving = true} else { this.moving = false }

        if(this.moving){
            this.currentAngle = anglelerp(this.currentAngle*PI/180,inputAxis.angle*PI/180,0.5)*180/PI
        }

        if(inputAxis.x){
            this.accx+= (this.maxSpeed*inputAxis.x-this.accx)/4;
        } else {
            this.accx+= (0-this.accx)/2.2;
        }
        if(inputAxis.y){
            this.accy+= (this.maxSpeed*inputAxis.y-this.accy)/4;
        } else {
            this.accy+= (0-this.accy)/2.2;
        }

        this.x+=this.accx
        this.y+=this.accy
        if(Math.abs(this.accx)>2||Math.abs(this.accy)>0.2){
            sync({name:'px',data:round(this.x)},{name:'py',data:round(this.y)})
        }
        

    }
}

class player extends gameObject{
    constructor(data){
        super(data)
        this.x,this.wx = data.x
        this.y,this.wy = data.y
        this.inventory = data.inventory
        this.level = data.level
        this.popTabs = data.popTabs
    }
    display(){
        fill(0)
        circle(this.wx,this.wy,30)
        this.wx +=(this.x-this.wx)/interpolationRate;
        this.wy +=(this.y-this.wy)/interpolationRate;
    }
}


class object extends gameObject{
    constructor(data){
        super(data)
        this.x = data.x
        this.y = data.y
        this.local = data.local
    }
    display(){
        rect(this.x,this.y,20,20)
    }
}

