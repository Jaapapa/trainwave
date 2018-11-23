function toTheRescue(materiaaldeel) {
    console.log('To the rescue! ' + materiaaldeel)
    // Change status for all messages in treindeel
    var messages = JSON.parse(window.localStorage.getItem("messages"))
    messages.sort(function (a, b) { return b.tijd - a.tijd });
    for (var i = 0; i < messages.length; i++) {
        if(messages[i].status.toLowerCase() === "nieuw" && messages[i].materiaaldeel === materiaaldeel) {
            messages[i].status = "Hulp onderweg";
        }
    }
    window.localStorage.setItem('messages', JSON.stringify(messages));
}