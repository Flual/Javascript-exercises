var i;


function startWorker() 
{
    if(typeof(i) == "undefined")
    {
        i = new Worker("demo_workers.js");
    }
    i.onmessage = function(event)
    {
        document.getElementById("result").innerHTML = event.data;
    };
}

function stopWorker()
{
    i.terminate();
    i = undefined;
}