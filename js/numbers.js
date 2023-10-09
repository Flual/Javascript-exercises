function test()
{
var Numone = document.getElementById("Numone").value;
var Numtwo = document.getElementById("Numtwo").value;
var Produkt = Numone * Numtwo;
console.log(Produkt);
document.getElementById("ausgabe").innerHTML = Produkt;
}

function Intervalleins()
{
    var Numthree = document.getElementById("Numthree").value;
    var Numfour = document.getElementById("Numfour").value;

    
    
    for (var i = 0;i <= Numfour; i++)
    {document.getElementById("ausgabe2").innerHTML += i + "<br>";}

}

function Intervallzwo()
{
    var Numfive = document.getElementById("Numfive").value;
    var Numsix = document.getElementById("Numsix").value;

    var i = Numfive;

    do 
    {
        document.getElementById("ausgabe3").innerHTML += i + "<br>";
        i++;
    }

    while(i >= Numfive && i <= Numsix);

}

function Namensliste()
{
    let liste = ["FLual", "Hansi", "Bakuna", "Nico", "Mani", "Hofertobsn"];

    var eingabe = prompt("Bitte eine Zahl zwischen 1 und 6 eingeben!");
    var i = eingabe;
    var anzahl = liste.length;

    if(i > 6 || i < 1 || isNaN(i)) 
    {
        var eingabe = prompt("Sie haben keine g&uumlltige Zahl eigegeben!");
    }
    else 
    {
        while (liste[i] != undefined)
        {
         
         document.getElementById('ausgabe4').innerHTML += liste[i] + "<br>";
         i++;
        }
    }



}