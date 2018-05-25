var mydiapo = {};
var count = 0;
var diapo;
var startDiapo;
var isStarted = false;
//chargement du fichier json
function getjson(count) {
    var requestURL = './diapo.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        diapo = request.response;
        //console.log("test", diapo.images[count].url)
        $("#diapo").attr("src", diapo.images[count].url);
    }
}

function diaporama() {
    var requestURL = './diapo.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        diapo = request.response;
        //console.log("test", diapo.images[count].url)
        $("#diapo").attr("src", diapo.images[count].url);
    }
    count++;
    if (count > 9) {
        count = 0;
    }
}

$(".button-left").click(function () {
    count--;
    if (count < 0) {
        count = 9;
    }
    console.log("count:", count);
    diapo = getjson(count);
});

$(".button-right").click(function () {
    count++;
    if (count > 9) {
        count = 0;
    }
    console.log("count:", count);
    diapo = getjson(count);
});

$(".button").click(function () {
    if (!isStarted) {
        startDiapo = window.setInterval(diaporama, 2000);
        $(".button").html("Stop Diaporama");
        isStarted = true;
    } else {
        window.clearInterval(startDiapo);
        $(".button").html("Start Diaporama");
        isStarted = false;
    }
});

$(document).ready(function () {
    $("#diapo").attr("src", "http://sandrine-julien-photographe.fr/wp-content/uploads/2018/02/bouddah2.jpg");
    
});
