/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function creaTabellaHTML(righe, colonne, fz) {
                righe = parseInt(righe)
                colonne = parseInt(colonne)
                var html = "<table>"
                for (var i = 0; i < righe; i++) {
                    html += "<tr>"
                    for (var j = 0; j < colonne; j++) {
                        html += "<td>"
                        html += fz(i, j)
                        html += "</td>"
                    }
                    html += "</tr>"
                }

                html += "</table>"
                return html
            }

            fz_colori = function (riga, colonna) {
                var r = 16
                var c = 16
                var rosso = parseInt(riga / r * 255)
                var verde = parseInt(colonna / c * 255)
                var h = "<div style=\"background-color: rgb(" + rosso + "," + verde + ",100);\">&nbsp;</div>"
                return h
            }

            function crea() {
                var rr = document.getElementById("numRighe").value;
                var cc = document.getElementById("numColonne").value;

                var t = creaTabellaHTML(rr, cc, fz_croce)

                document.getElementById("lavagna").innerHTML = t;
            }

            function fz_tabellaPitagorica(r, c) {
                return (r + 1) * (c + 1)
            }

            function fz_numeriCasualiColorati() {
                var n = parseInt(Math.random() * 100)
                if (n < 20) {
                    var colore = "red"
                } else if (n < 70) {
                    var colore = "yellow"
                } else {
                    var colore = "blue"
                }
                return creaDivHTML(n, "black", colore)

            }

            function creaDivHTML(contenuto, colore, sfondo) {
                return '<div style="background-color:' + sfondo + ';color:' + colore + '">' + contenuto + '</div>'
            }

// fz_croce = function(r,c) {}
            function fz_croce(r, c) {
                var riga = document.getElementById("riga").value
                var colonna = document.getElementById("colonna").value
                if ((r == riga) && (c == colonna)) {
                    return creaDivHTML("+", "black", "green")
                }

                if (r == riga) {
                    return creaDivHTML("=", "red", "blue");
                }
                if (c == colonna) {
                    return creaDivHTML("I", "blue", "red");
                }
                return ".";

            }

            document.getElementById("lavagna").innerHTML = creaTabellaHTML(12,12, function(){return " "});

            var coordinate = []

            function segna() {
                var r = document.getElementById("riga").value
                var c = document.getElementById("colonna").value

                coordinate.push({riga: r, colonna: c})
                document.getElementById("lavagna").innerHTML = creaTabellaHTML(12, 12, fz_aggiornaScacchiera)

                console.log("aggiorna", r, c)
            }

            function fz_aggiornaScacchiera(r, c) {
                for (var i = 0; i < coordinate.length; i++) {
                    var riga = coordinate[i].riga
                    var colonna = coordinate[i].colonna
                    if ((r == riga) && (c == colonna)) {
                        return "*"
                    }
                }
                return " "
            }

            function segnaRandom() {
                document.getElementById("riga").value = parseInt(Math.random() * 12)
                document.getElementById("colonna").value = parseInt(Math.random() * 12)
                segna()
            }

            idTimer = setInterval(
                    function () {
                        segnaRandom();
                    }, 1000)
