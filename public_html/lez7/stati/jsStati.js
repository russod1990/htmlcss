/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {
    $(".pulsanteAccesoSpento").click(function () {

        if ($(this).hasClass("acceso"))
            $(this).removeClass("acceso");
        else
            $(this).addClass("acceso");
    });
    $(".pulsanteSottolineato").click(function () {
        if ($(this).hasClass("acceso"))
            $(this).removeClass("acceso");
        else
            $(this).addClass("acceso");
    });
    $(".pulsanteCorsivo").click(function () {
        if ($(this).hasClass("acceso"))
            $(this).removeClass("acceso");
        else
            $(this).addClass("acceso");
    });
});

$("#puls1").click(function () {
    setTimeout(function () {
        if ($(".pulsanteAccesoSpento").hasClass("acceso"))
            $(".pulsanteAccesoSpento").removeClass("acceso");
        else
            $(".pulsanteAccesoSpento").addClass("acceso");
        if ($(".pulsanteSottolineato").hasClass("acceso"))
            $(".pulsanteSottolineato").removeClass("acceso");
        else
            $(".pulsanteSottolineato").addClass("acceso");
    }, 5000);
});

//setTimeout(function () {
//    alert("Buongiorno");
//}, 5000);

function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

var contatore = 0;
var direzioneCrescente = false;
var idTimer = 0;
$("#puls2").click(function () {
    $("#puls2").attr("diabled", "disabled")

    idTimer = setInterval(function () {

        contatore++;
        var colore = contatore % 256
        if (colore == 0) {
            direzioneCrescente = !direzioneCrescente
        }

        if (!direzioneCrescente) {
            colore = 256 - colore
        }


        $("#msg").html("Contatore: " + contatore + "<br>Colore Sfondo: " + colore + "<br>direzioneCrescente: " + direzioneCrescente)

        $("body").css({
            "background-color": rgb(colore, colore, colore),
            "color": rgb(255 - colore, 255 - colore, 255 - colore),
        })
    }, 30)

});

$("#pStop").click(function () {
    clearInterval(idTimer)
    $("#puls2").removeAttr("disabled");
});