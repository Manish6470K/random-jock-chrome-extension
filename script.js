fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(jockData => {
        var getData = jockData.attachments[0].text; 
        var putPlace = document.getElementById("jock");
        
        putPlace.innerHTML = getData;
    })