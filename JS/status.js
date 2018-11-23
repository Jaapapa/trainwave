var rIndex = document.getElementById("table");
var table = document.getElementById("table");

function fillTable(){
    console.log('yay');
    // fill the table with messages from the panic button
    var messages = JSON.parse(window.localStorage.getItem("messages"))
    messages.sort(function(a, b){return b.tijd - a.tijd});
    ritnummer = document.getElementById("ritnummer").value;
    console.log(ritnummer);
    for (var i = 0; i < messages.length; i++){
        if(messages[i].ritnummer === ritnummer) {
            addMessage(messages[i])
        }
    }
}

function addMessage(message){
    console.log(message)
    var table = document.getElementById("table");

    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(message.tijd);

    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        Tijdstip = d.toLocaleTimeString('nl-NL'),
        Opmerkingen = message.opmerking,
        Status = message.status;

    cell1.innerHTML = Tijdstip;
    cell2.innerHTML = Opmerkingen;
    cell3.innerHTML = Status;
}
