function textformatSetzen()
{
    /*
    * CSS-Klassen bei Element können mit JS auf zwei Arten verändert werden
    * classname: alles was in im Attribut class="" steht
    *  z.B. "text rahmen"
    * classlist: ein Array, aller Klassen die dem ELement zugewiesen wurden 
        0: text
        1: rahmen
        2: innenabstand
    */
    //bsp zuweisen mit classname
    document.getElementById('absatz1').className = "text";

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
    var ergebnis = document.getElementById('absatz1').classList.toggle("rahmen");
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
    var ergebnis = document.getElementById('absatz1').classList.toggle("text");
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
    var ergebnis =document.getElementById('absatz1').classList.toggle("innenabstand")
    if (ergebnis == true)
    {
        document.getElementById('btnpadding').innerText = "Padding entfernen";
    }
    else 
    {
        document.getElementById('btnpadding').innerText = "Padding hinzufügen";
    }

}