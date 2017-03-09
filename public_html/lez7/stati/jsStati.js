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
            $(this).addClass("acceso")
    });
    $(".pulsanteSottolineato").click(function () {
        if ($(this).hasClass("Sottolineato"))
            $(this).removeClass("Sottolineato");
        else
            $(this).addClass("Classico");
    });
});
