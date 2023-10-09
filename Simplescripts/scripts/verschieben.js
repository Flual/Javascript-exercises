var handle;
var step = 1;
function schritt()
{
    //bildschirmbreite
    breite = window.innerWidth;
    console.log(breite);

    var links = document.getElementById("quadrat").style.marginLeft;
    
    links = parseInt(links);

    if(links + 60 > breite || links < 0)
    {
        step = -step;
    }
    

    links = links + step;
    //console.log(links);
    document.getElementById("quadrat").style.marginLeft = links + "px";

}

function wiederholen()
{
    schritt();
    handle = setTimeout(wiederholen, 50,); //die Funktion rekursiv nach 0,5sec wiederaufrufen
    
}
function stop()
{
    clearTimeout(handle);
}