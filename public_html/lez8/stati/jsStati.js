/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var direzione = 1;
var aX = 0;
var aY = 0;
var contatore = 0;
var idTimer = 0;

$("#go").click(function () {
    $("#go").attr("diabled", "disabled")
    document.getElementById("go").disabled;
    idTimer = setInterval(function () {
        if (direzione === 1) {
            if (contatore < 19) {
                aX += 60;
                $("div #gif").css(
                        "left", aX);
                contatore++;
                ;
            } else {
                direzione = 2;
            }
        }
        if (direzione === 2) {
            if (contatore < 28) {
                aY += 60;
                $("div #gif").css(
                        "top", aY);
                contatore++;
                ;
            } else {
                direzione = 3;
            }
        }
        if (direzione === 3) {
            if (contatore < 47) {
                aX -= 60;
                $("div #gif").css(
                        "left", aX);
                contatore++;
                ;
            } else {
                direzione = 4;
            }
        }
        if (direzione === 4) {
            if (contatore < 56) {
                aY -= 60;
                $("div #gif").css(
                        "top", aY);
                contatore++;
                ;
            } else {
                direzione = 1;
                contatore = 0;
            }
        }
    }, 30);
});
$("#pStop").click(function () {
    clearInterval(idTimer);
    $("#go").removeAttr("disabled");
    document.getElementById("go").enabled;
});
