
function panic(messagetype, trainlocation){
    var bla = JSON.parse(window.localStorage.getItem('messages'));
    if(!bla) {
        bla = []
    }
    bla.push("Nieuw bericht")
    window.localStorage.setItem('messages', JSON.stringify(bla))
    alert(bla)
}
