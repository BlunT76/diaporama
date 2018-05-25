function Diaporama() {
    this.mydiapo = {};
    this.count = 0;
    this.diapo;
    this.startDiapo;
    this.isPlaying = false;
    this.images;
    var that = this;
    //chargement du fichier json
    this.getjson = function () {
        var requestURL = './diapo.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function () {
            this.diapo = request.response;
            that.count++;
            if (that.count > 9) {
                that.count = 0;
            }
            //console.log(that.count);
            //console.log("test", this.diapo.images[that.count].url);
            $("#diapo").attr("src", this.diapo.images[that.count].url);
            console.log(that.isPlaying);
            if (that.isPlaying) {
                this.startDiapo = window.setTimeout(that.getjson, 2000);
            }
        };
    }
}

var diapo1 = new Diaporama();

$(".button-left").click(function () {
    diapo1.isPlaying = false;
});

$(".button-right").click(function () {
    diapo1.isPlaying = true;
    console.log(diapo1.isPlaying)
    diapo1.getjson();
});

$(document).ready(function () {
    $("#diapo").attr("src", "http://sandrine-julien-photographe.fr/wp-content/uploads/2018/02/bouddah2.jpg");

});
