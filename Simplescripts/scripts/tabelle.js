var werteliste = []; //Globale Variable

function wertInListe()
//nimmt den eingegebenen Wert in die Werteliste auf
//mit überprüfung ob der Wert leer ist
//nach Aufnahme wird das Textfeld geleert
{
    document.getElementById("meldung").innerText = "";

    var wert = document.getElementById("eingabefeld").value;
    if (wert.trim() == "")
    {
        document.getElementById("meldung").innerText = "Bitte einene gueltigen Wert eingeben!";
        document.getElementById("eingabefeld").value = "";
            
        return 0;
    }

    werteliste.push(wert.trim());
    console.log(werteliste);

    document.getElementById("eingabefeld").value = "";
}//Ende der function wertInListe

function listeAlsTabelle()
// gibt die Werteliste in Form einer Tabelle im div aus
{
    /*<table>
     *  <thead>
            <tr>
                <th></th><th></th>
            
            </tr>
     *  </thead>
        <tbody>
            <tr>
            
                <td></td><td></td><td></td>    
            
            </tr>
        <t/body>

     *</table>
    */
    var tabellenZeile = "";
    var divElement = document.getElementById("tabelle"); //ref auf Element im HTML

    divElement.innerHTML = "<table></table>";

    document.getElementsByTagName("table")[0].innerHTML = "<thead></thead>";

    tabellenZeile = "<tr><th>Werte</th></tr>";

        document.getElementsByTagName("thead")[0].innerHTML = tabellenZeile;

    document.getElementsByTagName("table")[0].innerHTML += "<tbody></tbody>";

    divElement = document.getElementsByTagName("tbody")[0];

    //loop

    anzWerte = werteliste.length;

    for (var i = 0; i < anzWerte; i++)
    {
        tabellenZeile = "<tr><td>" + werteliste[i] + "</td></tr>";
        divElement.innerHTML += tabellenZeile;
    }

}// Ende der function listeAlsTabelle





