/*
*Definition:
    function functionname(parameter1, parameter2,...,parameter/n)
        {
            //Anweisungen
            //die Parameter werden verarbeitet
            return 0; Rückgabewert

            optional:
                parameter
                return
                return muss nichts zurückgeben
        }

*FUnktionen aufrufen:

*Funktionsname (para1, para2); ohne Rückgabewert zu verarbeiten
ergebnis = funtionsname(para1, para2);

*Funktion gibt true oder false zurück
*If (funtionsname(para1, para2) == true)

*warum functions:
        für wiederkehrende Aufgaben an zentraler Stelle einmal programmieren
        um ein Programm in kleinere Einheiten zu zerteilen


*/

function rechnen()
{
    var erstezahl = document.getElementById('zahl1').value;
    var zweitezahl = document.getElementById('zahl2').value;

    var ergebnis = addieren(erstezahl, zweitezahl);
    document.getElementById('ausgabe').innerText = "Das Ergebnis der Addition ist " + ergebnis;


}

function addieren(erstezahl, zweitezahl)
{
    var ergebnis = 0;
    erstezahl = Number(erstezahl);
    zweitezahl = Number(zweitezahl);
    ergebnis = erstezahl + zweitezahl;
    return ergebnis;

}

function multiplizieren()
{
    var erstezahl = document.getElementById('zahl1').value;
    var zweitezahl = document.getElementById('zahl2').value;

    var ergebnis = multip(erstezahl, zweitezahl);
    document.getElementById('ausgabe').innerText ="Das Ergebnis der Multiplikation ist " + ergebnis;

function multip()
{
    var ergebnis = 0;
    erstezahl = Number(erstezahl);
    zweitezahl = Number(zweitezahl);
    ergebnis = erstezahl * zweitezahl;
    return ergebnis;
}

}

