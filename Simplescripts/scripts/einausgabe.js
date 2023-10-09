function einAusgabe()
    {
        //User gibt Text ein
        //wir lesen text aus
        //merken den text -> variable
        //den text ausgeben
        let eingabeText = "";
        eingabeText = document.getElementById("eingabe").value;
        document.getElementById("ausgabe1").innerText = eingabeText;
    }

function einAusgabe2()
    {
        let eingabeText = "";
        eingabeText = document.getElementById("eingabe").value;
        document.getElementById("ausgabe1").innerHTML += eingabeText + "<br>";
    }

    function autoAusgabe()
    {
        let eingabe = "Ausgabe:<br>";
        eingabe += document.getElementById('eingabe2').value;
        document.getElementById('ausgabe2').innerHTML = eingabe;
    }