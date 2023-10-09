function zahlenliste()
{
    /*for (startwer;endwert;schrittweite)
    {

    }
    */
   for (var i = 1;i <= 10; i++)
   {
        document.getElementById('ausgabe1').innerHTML += i + "<br>"
   }
}
function namensliste()
{
    let liste = ["FLual", "Hansi", "Bakuna", "Nico", "Mani", "Hofertobsn"];

    //Namensliste ausgeben
    //um auf ein Element zuzugreifen: liste [3] ist der zweite Wert in der eckigen Klammer wird immer die id aus dem Array abgerufen welcher mit 0 startet
    let anzahl = liste.length;
    for (let i = 0;i < 6; i++)
    {
        document.getElementById('ausgabe2').innerHTML += liste[i] + "<br>";
    }

}

function namensliste2()
{
    /*while

    while (bedignung um in der schleife zu bleiben)
    {
        anweisung
    }
    */
    let liste = ["FLual", "Hansi", "Bakuna", "Nico", "Mani", "Hofertobsn"];
   let i = 0;
   let anzahl = liste.length;
   while (i <= anzahl)
   {
    
    document.getElementById('ausgabe3').innerHTML += liste[i] + "<br>";
    i++;
   }
}
function namensliste3()
{
    let liste = ["FLual", "Hansi", "Bakuna", "Nico", "Mani", "Hofertobsn"];
   let i = 0;
   let anzahl = liste.length;
   while (liste[i] != undefined)
   {
    
    document.getElementById('ausgabe4').innerHTML += liste[i] + "<br>";
    i++;
   }
}
function eingabeaufforderung()
{
    /*
    * alert (text): einen tetx in dialog ausgeben
    * prompt(text): User zur Eingabe eines Wertes auffordern
    * confirm (text): User zu ja und nein Entscheidung abfragen
    */

    var eingabe = prompt("Bitte geben Sie eine Zahl zwischen 1 und 10 ein!");
    while (eingabe > 10 || eingabe < 1 || isNaN(eingabe))
    {
        eingabe = prompt("SIe haben keine Zahl zwischen 1 und 10 eingegeben");
    }
    alert("Danke für die richtige Zahl! :)");
}