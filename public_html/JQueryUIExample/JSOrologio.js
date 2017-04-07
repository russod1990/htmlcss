/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getOraMinSec() {
  var t = new Date()
  var h = t.getHours()
  var m = t.getMinutes()
  var s = t.getSeconds()
  var ms = t.getMilliseconds()

  var mm = (m < 10) ? "0" + m : m
  var ss = (s < 10) ? "0" + s : s

  return h + ":" + mm + ":" + ss
}

function scriviOra() {
  $("#orologio").html(getOraMinSec())

  scriviOraAnalogica()

}

function scriviOraAnalogica() {
  var adesso = new Date()
  var aOra = adesso.getHours() * 30 - 90 + adesso.getMinutes() * .5
  var aMin = adesso.getMinutes() * 6 - 90 + adesso.getSeconds() * .1
  var aSec = adesso.getSeconds() * 6 - 90 + adesso.getMilliseconds()/1000*6

  $("#lancettaOra").css("transform", `rotate(${aOra}deg)`)
  $("#lancettaMinuti").css("transform", `rotate(${aMin}deg)`)
  $("#lancettaSecondi").css("transform", `rotate(${aSec}deg)`)
}

setInterval(function() {
  scriviOra()
}, 30)

function disegnaQuadrante(){
  for (var i=1; i<=12; i++){
    var angolo = i * 30 
    var div = $("<div>").addClass("ora").css("transform", `rotate(${angolo}deg)`)
    var span = $("<span>").html(i).css("transform", `rotate(${-angolo}deg)`)
    $(div).append(span)
    $("#orologioAnalogico").append(div)
  }
}

disegnaQuadrante()