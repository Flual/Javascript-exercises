/*
*liest Text aus EIngabefeld aus und setzt diesen darunter zeilenweise in einen Absatz
*ausserdem wird eine checkbox fett geprüft ist diese gecheckt wird der Text in Fettschrift eingefügt
*
*/
function txtHinzufuegen()
{
    //var definieren 
    //text auslesen und checkbox überprüfen
    //wenn fett, dann das Html um den Text basteln
    //danach den Textsturz einfügen
    //das EIngabefeld automatisch leeren

    var text = "";
    var check = "false";
    document.querySelectorAll("p")[0].style.display = "none";
    text = document.querySelector('input').value;
    //prüfen ob Text leer
    if(text == "")
    {
        document.querySelectorAll("p")[0].style.display = "block";
    }
    else
    {

    

        console.log(text);
        check = document.getElementsByTagName('input')[1].checked;
        console.log(check);

    if(check == true)
        {
            text = "<span style='font-weight:bold'>" + text + "</span>";
            console.log(text);


        }
        text += "<br>";
        console.log(text);
        document.querySelectorAll("p")[1].innerHTML += text;
        document.querySelector("input").value = "";
        document.getElementsByTagName('input')[1].checked = false;

    }// ENde vom If
}// ENde von der function

function ckeckSchaltjahr()
//Überprüft ob die eingegebene Jahreszahl ein Schaltjahr ist und gibt enrsprechende Meldungen
{
    //var definieren
    //Zahl einlesen
    //ifisnumeric
    //Zahl auf Schaltjahr prüfen
    //Ergebnis ausgeben
    
    var zahl = 0;
    var meldung = "";

    zahl = document.getElementsByTagName("input")[2].value;

    if(isNaN(zahl))
    {
        meldung = "Keine Zahl eingegeben!";
        document.getElementsByTagName("p")[3].innerText = meldung;
        return 0;
    }
    if(zahl <= 0)
    {
        meldung = "Zahl Kleiner als 0 ";
        document.getElementsByTagName("p")[3].innerText = meldung;
        return 0;
    
    }



    if(zahl % 400 == 0)
    {
        meldung = zahl + " ist ein Schaltjahr!";
    }
    else if (zahl % 100 == 0)
    {
        meldung = zahl + " ist kein Schaltjahr!";
    }
    else if (zahl % 4 == 0)
    {
        meldung = zahl + " ist ein Schaltjahr!";
    }
    else
    {
        meldung = zahl + " ist kein Schaltjahr!";
    }

    document.getElementsByTagName("p")[3].innerText = meldung;



}