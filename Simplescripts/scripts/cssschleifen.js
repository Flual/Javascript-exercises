function textformatSetzen()
{
    /*
    *mehrere Elemente auswählen
    *querySelectorAll(CSS selector)
    *getElementsByTagName(tag-namen)
    */
    //bsp zuweisen mit classname
    var alleAbsaetze = document.getElementsByTagName("p");

    var anzahlAbsaetze = alleAbsaetze.length;

    for(var i = 0; i < anzahlAbsaetze; i++)
    {
        alleAbsaetze[i].className = "text";

    }




}
function rahmenformatsetzen()
{
    document.getElementById('absatz1').className = "rahmen";
}
function addrahmenformat()
{
    //bsp mit classlist und der Methode add()
    document.getElementById('absatz1').classList.add('rahmen');
}
function addtextformat()
{
    //bsp mit classlist und der Methode add()
    document.getElementById('absatz1').classList.add('text');
}
function removerahmenformat()
{
    //bsp mit classlist und der Methode add()
    document.getElementById('absatz1').classList.remove('rahmen');
}
function removetextformat()
{
    //bsp mit classlist und der Methode add()
    document.getElementById('absatz1').classList.remove('text');
}
function togglerahmenformat()
{
    var ergebnis;
    var listeAS;
    var anzAS;

    listeAS = document.getElementsByTagName("p");
    anzAS = listeAS.length;

    for(var i = 0; i < anzAS; i++)
    {
        ergebnis = listeAS[i].classList.toggle("rahmen");

    }
    if(ergebnis)
    {
        document.getElementById('btnrahmen').innerText = "Rahmen entfernen"
    }
    else 
    {
        document.getElementById('btnrahmen').innerText = "Rahmen hinzufügen";
 
    }
}
function toggletextformat()
{
    var ergebnis;
    var listeAS;
    var anzAS;

    listeAS = document.getElementsByTagName("p");
    anzAS = listeAS.length;

    for(var i = 0; i < anzAS; i++)
    {
        ergebnis = listeAS[i].classList.toggle("text");

    }

    if (ergebnis == true)
    {
        document.getElementById('btntxt').innerText = "Textformat entfernen";
    }
    else 
    {
        document.getElementById('btntxt').innerText = "Textformat hinzufügen";
    }
}
function toggleinnenabstand()
{
    var ergebnis;
    var listeAS;
    var anzAS;

    listeAS = document.getElementsByTagName("p");
    anzAS = listeAS.length;

    for(var i = 0; i < anzAS; i++)
    {
        ergebnis = listeAS[i].classList.toggle("innenabstand");

    }
    if (ergebnis == true)
    {
        document.getElementById('btnpadding').innerText = "Padding entfernen";
    }
    else 
    {
        document.getElementById('btnpadding').innerText = "Padding hinzufügen";
    }

}
