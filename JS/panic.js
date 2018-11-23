
function panic(messagetype, trainlocation){
    message = {}
    message.trein = document.getElementById("trein").value,
    message.tijd = Date()

    var bla = JSON.parse(window.localStorage.getItem('messages'));
    if(!bla) {
        bla = []
    }
    bla.push(message)
    console.log("Nieuw bericht: Trein: " + message.trein + " Tijd: " + message.tijd)
    window.localStorage.setItem('messages', JSON.stringify(bla))
    alert(bla)
}
