var rIndex = document.getElementById("table");
var table = document.getElementById("table");

function fillTable(){
    // fill the table with messages from the panic button
    var messages = JSON.parse(window.localStorage.getItem("messages"))
    for (var i = 0; i < messages.length; i++){
        addMessage(messages[i])
    }
}

function addMessage(message){
    var table = document.getElementById("table");

    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),
        cell7 = newRow.insertCell(6),
        Rit = message.ritnummer,
        Materiaaldeel = message.materiaaldeel
        Tijdstip = message.tijd,
        Opmerkingen = message.opmerkingen
        Bak = "5";

    cell1.innerHTML = Rit;
    cell2.innerHTML = Materiaaldeel;
    cell3.innerHTML = Bak;
    cell4.innerHTML = Tijdstip;
    cell5.innerHTML = Opmerkingen;
    cell6.innerHTML = '<button>Edit</button>'
    cell7.innerHTML = '<button>Remove</button>'
}

function removeSelectedRow()
{
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("Trein").value = "";
    document.getElementById("Bak").value = "";
    document.getElementById("Tijdstip").value = "";
}
