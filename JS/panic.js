
function panic(messagetype, trainlocation){
    message = {}
    message.ritnummer = document.getElementById("ritnummer").value,
    message.materiaaldeel = document.getElementById("materiaaldeel").value,
    message.tijd = Math.round((new Date()).getTime() / 1000);

    var messages = JSON.parse(window.localStorage.getItem('messages'));
    if(!messages) {
        messages = []
    }
    messages.push(message)
    console.log("Nieuw bericht: Trein: " + message.trein + " Tijd: " + message.tijd)
    window.localStorage.setItem('messages', JSON.stringify(messages))
    //alert(JSON.stringify(messages))
}
