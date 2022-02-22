
const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function() {
    const data = JSON.parse(this.responseText);
    for (let planet of data.results) {
        console.log(planet.name);
    }
    const filmURL = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener("load", function(){
        const filmData = JSON.parse(this.responseText);
        console.log("Here's the film data:  ", filmData);
        console.log("okiiii");
    })
    filmReq.addEventListener("error", function(){
        console.log("nieoki");
    })
    filmReq.open("GET", filmURL);
    filmReq.send();
})
firstReq.addEventListener("error", ()=> {
    console.log("error :(");
})

firstReq.open("GET", "https://swapi.dev/api/planets/")
firstReq.send();

console.log("Request sent");