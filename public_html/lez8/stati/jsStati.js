/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var direzione = 1;
var aX = 0;
var aY = 0;
var contatore = 0;

$("#go").click(function () {
    setInterval(function () {
        if (direzione === 1) {
            if (contatore < 12) {
                aX += 60;
                contatore++;
                $("div #gif").css({
                    "left": aX
                });
            } else {
                direzione=2;
            }
        }
        
    });
}, 30);
