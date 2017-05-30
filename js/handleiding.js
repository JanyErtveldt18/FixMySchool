$(function () {
    var jsonURL = "../json/handleiding.json";
    //generen van de fotos
    $.getJSON(jsonURL, function (json) {
        var imgLijst = "";
        $.each(json.klacht, function () {
            imgLijst += '<a><img class="Slider" src= "' + this.img + '"></a>';
        });
        $('#fotoContainer').append(imgLijst);
        // bijpassende tekst
        var tekst = "";
        $.each(json.klacht, function () {
            tekst += '<p class="tekstBijpassendeSlide">' + this.beschrijving + '</p>';
        });
        $('#tekst').append(tekst);
        //generen van de bolletjes
        var count = 1;
        var bol = "";
        $.each(json.klacht, function () {
            bol += '<a class="Aanwijzingen" onclick ="huidigFoto(' + count + ')"></a>';
            count++;
        });
        $('#dots').append(bol);
        weergevenSlider();
    });
});
var positieSliderFoto = 1;
var tekstpositie=1;

function plusSlides(plaats) {
    weergevenSlider(positieSliderFoto += plaats);
   
}

function huidigFoto(plaats) {
    weergevenSlider(positieSliderFoto = plaats);
   
}

function locationStorage() {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("test", positieSliderFoto);
    }
}

function weergevenSlider(plaats) {
   
    var slides = document.getElementsByClassName("Slider");
    var Aanwijzingen = document.getElementsByClassName("Aanwijzingen");
    
    var bijpassendetekst=document.getElementsByClassName("tekstBijpassendeSlide");
    if (positieSliderFoto == 1) {
        //verbergen van rechter pijl, begin van slider
        $('.Vorig').hide();
    }
    else {
        $('.Vorig').show();
    }
    //rechter pijl zichtbaarheid
    if (plaats > slides.length - 1) {
        $('.Volgende').hide();
    }
    else {
        $('.Volgende').show();
    }
    var teller;
    for (teller = 0; teller < slides.length; teller++) {
        slides[teller].style.display = "none";
    }
     for (teller = 0; teller < bijpassendetekst.length; teller++) {
        bijpassendetekst[teller].style.display = "none";
    }
    for (teller = 0; teller < Aanwijzingen.length; teller++) {
        Aanwijzingen[teller].className = Aanwijzingen[teller].className.replace("active", "");
    }
    slides[positieSliderFoto - 1].style.display = " block";
    bijpassendetekst[positieSliderFoto - 1].style.display = " block";
    Aanwijzingen[positieSliderFoto - 1].className += " active";
}