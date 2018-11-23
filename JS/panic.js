
function panic(messagetype, trainlocation){
    message = {}
    message.trein = document.getElementById("trein").value,
    message.tijd = Date()

    var messages = JSON.parse(window.localStorage.getItem('messages'));
    if(!messages) {
        messages = []
    }
    messages.push(message)
    console.log("Nieuw bericht: Trein: " + message.trein + " Tijd: " + message.tijd)
    window.localStorage.setItem('messages', JSON.stringify(messages))
    alert(JSON.stringify(messages))
}
