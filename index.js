
// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", function() {
//     const data = JSON.parse(this.responseText);
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
//     const filmURL = data.results[0].films[0];
//     const filmReq = new XMLHttpRequest();
//     filmReq.addEventListener("load", function(){
//         const filmData = JSON.parse(this.responseText);
//         console.log("Here's the film data:  ", filmData);
//         console.log("okiiii");
//     })
//     filmReq.addEventListener("error", function(){
//         console.log("nieoki");
//     })
//     filmReq.open("GET", filmURL);
//     filmReq.send();
// })
// firstReq.addEventListener("error", ()=> {
//     console.log("error :(");
// })

// firstReq.open("GET", "https://swapi.dev/api/planets/")
// firstReq.send();

// console.log("Request sent");

//........................................................

function checkStatusAndParse(response) {
    if (response.ok) {
        return response.json()
    } else {
        console.log("not status 200, instead ", response.status);
        throw new Error(`Current status: ${response.status}`)
    }
}

// fetch("https://swapi.dev/api/planets/")
//     .then(checkStatusAndParse)
//     .then((data) => {
//         const filmURL = data.results[0].films[0];
//         return fetch(filmURL)
//     })
//     .then(checkStatusAndParse)
//     .then((data) => {
//         const director = data.director
//         console.log(director);
//     }).catch((err) => {
//         console.log("sth went wrong", err);
//     })

//.........................................................................................
// function printPlanets(data) {
//     console.log("Loaded 10 more planets");
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
//     return Promise.resolve(data.next);
//     // takie cuś jak powyżej da nam resolved promise'a
// }

function getNext10planets(url) {
    return fetch(url);
}

//     fetch("https://swapi.dev/api/planets/")
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(getNext10planets)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(getNext10planets)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(getNext10planets)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .catch((err) => {
//         console.log("sth went wrong", err);
//     })

//....................................................

function printPlanetsWithAxios(response) {
    console.log("Loaded 10 more planets");
    for (let planet of response.data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(response.data.next);
    // takie cuś jak powyżej da nam resolved promise'a
}

function getNext10planets(url="https://swapi.dev/api/planets/") {
    return axios.get(url);
}

getNext10planets()
.then(printPlanetsWithAxios)
.then(getNext10planets)
.then(printPlanetsWithAxios)
.catch(err => console.log("Error is: ", err));