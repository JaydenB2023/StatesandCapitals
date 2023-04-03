window.onload =  function(){
    try 
    {
        var url = "http://localhost:80/StatesCapsProj/JSON/statesCaps.json"; 
        
        var request = new XMLHttpRequest();
    
        request.open("Get", url);

            request.onload = function () 
            {
                if (request.status == 200) {
                    //alert("Returned the jason data");
                 
                    parseJasonString(request.responseText);
                }
                else 
                {
                     alert("Didn't return the data");
                }
            }

        request.send(null);
    }

    catch (err) 
    {
        alert(err.message)
    }
}

