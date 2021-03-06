var rIndex = document.getElementById("table");
var table = document.getElementById("table");

function fillTable(){
    // fill the table with messages from the panic button
    var messages = JSON.parse(window.localStorage.getItem("messages"))
    messages.sort(function(a, b){return b.tijd - a.tijd});
    for (var i = 0; i < messages.length; i++){
        addMessage(messages[i])
    }
}

function addMessage(message){
    var table = document.getElementById("table");

    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(message.tijd);

    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),
        cell7 = newRow.insertCell(6),
        cell8 = newRow.insertCell(7),
        Rit = message.ritnummer,
        Materiaaldeel = message.materiaaldeel,
        Tijdstip = d.toLocaleTimeString('nl-NL'),
        Opmerkingen = message.opmerking,
        Bak = "5",
        Status = message.status;

    cell1.innerHTML = Rit;
    cell2.innerHTML = Materiaaldeel;
    cell3.innerHTML = Bak;
    cell4.innerHTML = Tijdstip;
    cell5.innerHTML = Opmerkingen;
    cell6.innerHTML = "<button>To The Rescue!</button>";
    // onclick={toTheRescue(" + Materiaaldeel + ")}
    cell6.onclick = function() { toTheRescue(Materiaaldeel); };
    cell7.innerHTML = '<button>Vals Alarm</button>';
    cell8.innerHTML = Status;
}

function removeSelectedRow()
{
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("Trein").value = "";
    document.getElementById("Bak").value = "";
    document.getElementById("Tijdstip").value = "";
}
