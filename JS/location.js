function getMaterieelNummers(ritnummer,callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data=JSON.parse(xhttp.responseText);
            var delen=data.materieeldelen;
            var mat_nummers=[];
            delen.forEach(function(d){
                mat_nummers[mat_nummers.length]=d.materieelnummer;
            });
            callback(mat_nummers);
        }
    };
    xhttp.open("GET", "https://sslsites.de/marco.leone.nl/ns/trein_info.php?ritnummer="+ritnummer, true);
    xhttp.send();
}

/*var ritnummer=1730;
 getMaterieelNummers(ritnummer,function(mat_nummers){
 alert("Delen:"+mat_nummers.join("-"));
 });*/


function alleTreinen(callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data=JSON.parse(xhttp.responseText);

            callback(data);
        }
    };
    xhttp.open("GET", "https://sslsites.de/marco.leone.nl/ns/trein_locaties.php" , true);
    xhttp.send();
}

/*alleTreinen(function(treinen){
 alert("Aantal treinen:"+treinen.length);
 });*/

function getRitnummer(materieelnummer,callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var nummer=parseInt(xhttp.responseText);
            callback(nummer);
        }
    };
    xhttp.open("GET", "https://sslsites.de/marco.leone.nl/ns/ritnummer.php?materieelnummer="+materieelnummer, true);
    xhttp.send();
}

/*getRitnummer(4035,function(number){
 alert(number);
 });*/

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function inRange(timeLapse, maxSpeed, lat1, lon1, lat2, lon2) {

    // hardcode timelapse of 10 minutes
    var timelapse = 1/6;

    // hardcoded maxspeed of 140 km/h
    var maxSpeed = 140;

    // maxRange in km = Km/h * h
    var maxRange = maxSpeed * timelapse;

    if (dist(lat1, lon1, lat2, lon2) <= maxRange) {
        return true;
    }
    else {
        return false;
    }
}

function closest(lat, lon, callback, data) {
    var closest = data[0]
    data.forEach(function(d) {
            if (dist(d.lat, d.lng, lat, lon) < dist(closest.lat, closest.lng, lat, lon)) {
                closest = d
            }
        }
    )
    callback(closest);
}


function dist(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;

    var dLat = degreesToRadians(lat2-lat1);
    var dLon = degreesToRadians(lon2-lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return earthRadiusKm * c;
}

// var trains = [trainobjects]

/*var lat1 = 52.371353;
 var lon1 = 5.222124;

 var lat2 = 52.092876;
 var lon2 = 5.104480;

 var d = dist(lat1, lon1, lat2, lon2);

 document.write(d);*/


function detectTrein(lat,lon,callback){
    alleTreinen(closest.bind(this,lat, lon,function(result){
        //alert(JSON.stringify(result));
        //alert(result.materieelDeel);
        getRitnummer(result.materieelDeel,function(ritnummer){
            getMaterieelNummers(ritnummer,function(nummers){
                callback({ritnummer:ritnummer,materiaalDelen:nummers});
            });
        })
    }));
}

/*var lat = 52.371353;
 var lon = 5.222124;
 detectTrein(lat,lon,function(result){
 alert(JSON.stringify(result));
 });*/


