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
	  var r={};
    r.ritnummer=ritnummer;
    r.soort=reportCategory;
		r.rijtuignummer=parseInt(document.getElementById("rijtuignummer").value);
    r.locatie=document.getElementById("locatie").value;
    r.Opmerking=document.getElementById("opmerking").value;

    alert(JSON.stringify(r));
}
