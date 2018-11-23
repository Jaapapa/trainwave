var reportCategory="";
var ritnummer="";

document.addEventListener("DOMContentLoaded", documentLoaded, false);

function documentLoaded(){

document.getElementById("reportButtons").childNodes.forEach(function(el){
    el.onclick=doButtonClick.bind(this,el.innerHTML);
  });
}


function doButtonClick(category){
		reportCategory=category.trim();
    document.getElementById("reportButtons").style.display="none";
    document.getElementById("meldingScherm").style.display="block";
    document.getElementById("categoryName").innerHTML=category;
}

function rijtuigChange(){
	 var rijtuignummer=document.getElementById("rijtuignummer").value;
   getRitnummer(rijtuignummer,function(rit){
   		ritnummer=rit;
   		getTreinNaam(rit,function(naam){
      	document.getElementById("treinNaam").innerHTML=naam;
      });
   })
}

function formVerzenden(){
    var message = {}
    message.ritnummer = document.getElementById("ritnummer").value,
    message.materiaaldeel = document.getElementById("rijtuignummer").value,
    message.bak = document.getElementById("locatie").value;
    message.opmerking=document.getElementById("opmerking").value;
    message.tijd = Math.round((new Date()).getTime() / 1000);
    message.status = "Nieuw";

    var messages = JSON.parse(window.localStorage.getItem('messages'));
    if(!messages) {
        messages = []
    }
    messages.push(message)
    console.log("Nieuw bericht: materiaaldeel: " + message.materiaaldeel + " Tijd: " + message.tijd)
    window.localStorage.setItem('messages', JSON.stringify(messages))
    alert(JSON.stringify(messages))
}
