let socket
let myid = undefined
let syncData = {}
client = io.connect('http://localhost:3000')


client.on('connect',()=>{
    console.log('Connected')
    client.emit('HELLO',{version:gameData.version})
})

client.on('HELLO',(data)=>{
    myid = data.id
    me = new localPlayer({id:myid,x:centerx,y:centery})
})

client.on('FAILURE',(data)=>{
    console.log(`Connection error: ${data}`)
})

client.on('disconnect',()=>{
    console.log('Disconnected')
})

client.on("TICK",(data)=>{
    //console.log(data)
    for (let [key, value] of Object.entries(data)) {
        if(players[key]){
            players[key].x = value.px
            players[key].y = value.py
        } else if(key!=myid){players[key] = new player({x:value.px,y:value.py})}
    }

})

client.on("DELETEPLAYER",(id)=>{
    console.log('trying deletion')
    delete players[id]
})

function sync(...args){
    args.forEach((e)=>{
        syncData[e.name]=e.data
    })
}

setInterval(()=>{
    if(Object.keys(syncData).length>0){
        client.emit('TICK',syncData)
        syncData = {}
    }
},1000/ticks)

function sendData(){
    
}