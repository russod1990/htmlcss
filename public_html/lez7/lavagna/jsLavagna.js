/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(".numeri").click(function() {
   //var n = $(this).text() //numero scritto sul tasto cliccato
   var giaScritto = $("#lavagna").html()
     //$("#lavagna").html(giaScritto + n)
   $("#lavagna").html($("#lavagna").html() + $(this).text())
 })

 $("#cancellaUltimo").click(function() {
   var giaScritto = $("#lavagna").html()

   var nuovaStringa = giaScritto.substring(0, giaScritto.length - 1)
   $("#lavagna").html(nuovaStringa)
 })

 $("#cancella").click(function() {
   var r = confirm("sei sicuro?")
   if (!r) {
     return;
   }
   $("#lavagna").html("")
 })

 $(".colori").each(function(i, elm) {
   var v = ["red", "green", "blue", "orange", "brown", "white", "black", "magenta", "aqua", "yellow"]
   $(elm).css("background-color", v[i])
 })

 $(".colori").click(function() {
   var colore = $(this).css("background-color")
   var target = $("#cambiaSfondoTesto").data("target")
   if (target == "Testo") {
     $("#lavagna").css("color", colore)
   } else {
     $("#lavagna").css("background-color", colore)
   }

 })

 $("#cambiaSfondoTesto").data("target", "Sfondo")

 $("#cambiaSfondoTesto").click(function() {
   var target = $("#cambiaSfondoTesto").data("target")

   if (target == "Sfondo") {
     $("#cambiaSfondoTesto span:nth-child(1)").css("font-weight", "normal")
     $("#cambiaSfondoTesto span:nth-child(2)").css("font-weight", "bold")
     $("#cambiaSfondoTesto").data("target", "Testo")
   } else {
     $("#cambiaSfondoTesto span:nth-child(1)").css("font-weight", "bold")
     $("#cambiaSfondoTesto span:nth-child(2)").css("font-weight", "normal")
     $("#cambiaSfondoTesto").data("target", "Sfondo")
   }

 })

 $("#scrollBarSiNo").data("scrollBar", true)

 $("#scrollBarSiNo").click(function() {
   var b = $("#scrollBarSiNo").data("scrollBar")
   if (b) {
     $("#lavagna").css("overflow", "hidden")
     $("#scrollBarSiNo").data("scrollBar", false)
     $("#scrollBarSiNo span:nth-child(1)").css("font-weight", "normal")
     $("#scrollBarSiNo span:nth-child(2)").css("font-weight", "bold")
   } else {
     $("#lavagna").css("overflow", "scroll")
     $("#scrollBarSiNo").data("scrollBar", true)
     $("#scrollBarSiNo span:nth-child(1)").css("font-weight", "bold")
     $("#scrollBarSiNo span:nth-child(2)").css("font-weight", "normal")
   }

 })
