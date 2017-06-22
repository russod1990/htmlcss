/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("body").keydown(function (e1) {
    var tasto = e1.which

    switch (tasto) {
        case 79:
            $("#giocatore2").css("top", "-=10")
            break;
        case 76:
            $("#giocatore2").css("top", "+=10")
            break;
        case 87:
            $("#giocatore1").css("top", "-=10")
            break;
        case 83:
            $("#giocatore1").css("top", "+=10")
            break;

            //case 107:
            //var v = $("#pallina").data("velocita")
            //$("#pallina").data("velocita", v + .5);
            //break;

            //case 109:
            //var v = $("#pallina").data("velocita")
            //$("#pallina").data("velocita", v - .5);
            //break;
        default:
            console.log("tasto", tasto)
    }

})

$("#pallina").data({
    "direzione": 45,
    "velocita": 5
})

function muoviPallina() {
    var p = $("#pallina")
    var x = parseFloat($(p).css("left"))
    var y = parseFloat($(p).css("top"))

    var v = $(p).data("velocita")
    var aDeg = $(p).data("direzione")
    var aRad = aDeg / 180 * Math.PI
    var dx = Math.cos(aRad) * v
    var dy = Math.sin(aRad) * v

    var nx = x + dx
    var ny = y + dy
    //sconsole.log("muoviPallina", v, nx, ny)
    $(p).css({
        "left": nx + "px",
        "top": ny + "px"
    })

    if (ny < 0 || ny > ($(document).height()) - 20) {
        $(p).data("direzione", -aDeg)
    }

    if (nx < 0 || nx > $("body").width() + 20) {
        $(p).data("direzione", 90 + aDeg)
    }


    var xGiocatore2 = Number($("#giocatore2").css("left").replace(/px$/, ''));
    var yGiocatore2 = Number($("#giocatore2").css("top").replace(/px$/, ''));
    var xGiocatore1 = Number($("#giocatore1").css("left").replace(/px$/, ''));
    var yGiocatore1 = Number($("#giocatore1").css("top").replace(/px$/, ''));
    console.log(nx + " " + xGiocatore1);
    if (nx > xGiocatore2 - 20 && ny > yGiocatore2 && ny < yGiocatore2 + 120) {
        $(p).data("direzione", 90 + aDeg)
    }
    if (nx < xGiocatore1 + 20 && ny > yGiocatore1 && ny < yGiocatore1 + 120) {
        $(p).data("direzione", 90 + aDeg)
    }
    
    if (nx=0){
        $(p).css() //reimpostare alla posizione centrale
    }
    
    if (nx=($("body").width()+20)){
        $(p).css() //reimpostare alla posizione centrale
    }
}

setInterval(function () {
    muoviPallina()
}, 10)