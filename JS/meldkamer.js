
var rIndex = document.getElementById("table");
var table = document.getElementById("table");


function fillTable(){
    // fill the table with messages from the panic button
    var table = document.getElementById("table");
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
        Trein = message.trein,
        Tijdstip = message.tijd,
        Bak = "5";

    cell1.innerHTML = Trein;
    cell2.innerHTML = Bak;
    cell3.innerHTML = Tijdstip;

}

function addHtmlTableRow()
{
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's

    var rIndex = document.getElementById("table");
    var table = document.getElementById("table");

    if(!checkEmptyInput()){
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        Trein = document.getElementById("Trein").value,
        Bak = document.getElementById("Bak").value,
        Tijdstip = document.getElementById("Tijdstip").value;

    cell1.innerHTML = Trein;
    cell2.innerHTML = Bak;
    cell3.innerHTML = Tijdstip;
}
}


function editHtmlTbleSelectedRow()
{
    var rIndex = document.getElementById("table");
    var table = document.getElementById("table");

    var Trein = document.getElementById("Trein").value,
        Bak = document.getElementById("Bak").value,
        Tijdstip = document.getElementById("Tijdstip").value;
   if(!checkEmptyInput()){
    table.rows[rIndex].cells[0].innerHTML = Trein;
    table.rows[rIndex].cells[1].innerHTML = Bak;
    table.rows[rIndex].cells[2].innerHTML = Tijdstip;
  }
}

function removeSelectedRow()
{
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("Trein").value = "";
    document.getElementById("Bak").value = "";
    document.getElementById("Tijdstip").value = "";
}
