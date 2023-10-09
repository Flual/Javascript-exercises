//scripts für index.html
function meldungAnzeigen()
    {
        alert('Diese Meldung kommt von einer externen JS Datei!');
    }
    /*
    *manchmal muss ich mir etwas mekren: einen text, Zahl
    *oder komplizierte: ein Objekt in der HTMLseite, ein Datum, eine Liste von Werten (Array)
    *dazu benötige ich eine Variable ( ist Veränderbar)
    *Alternativ: eine Konstante    
    */

    function eineVariable()
        {
            //sollte man definieren
            var vorname;
            let nachname;
            //einer Variable kann ein Wert zugewiesen werden
            vorname = "Florian";
            nachname = "Stangl";
            //variable definieren und gleich initialisieren
            //initialisieren: erstmalige Wertzuweisung zu einer Variable
            var strasse = "Teichgasse 7";
            //definition einer variable mit initialisierung mit einem leeren wert
            var plz = "8020";
            //kann man auch machen aber ist nicht erwünscht
            ort = "Graz";
            //Ausgabe
            alert(vorname + " " + nachname + " " + "mit Wohnsitz in" + " " + plz + " " + ort + " " + "in der" + " " + strasse);
        }
    
    function anzeigeImHTML()
        {
            document.write('Hallo!');
        }
    function ansprechen()
        {
            document.getElementById("hieranzeigen").innerText = "Hallo Welt!";
            document.getElementById("buttonAnzeigeHTML").innerText = "Auf diesen Button wurde schon geklickt!";
            
        }
    function anzeigeInKonsole()
        {
            console.log("Da sind wir gerade!");
            
        }