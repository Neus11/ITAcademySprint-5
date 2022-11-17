// Exercici 1 y 2

//Tres lineas comentadas para implementer la combinación de dos APIs
//en el ejercicio 5

/*const jokeButton = document.querySelector("#getJoke");
jokeButton.addEventListener("click", fetchJoke);

const  jokeOut = document.querySelector("#joke");
*/
let jokeInfo;

function fetchJoke() {
    fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    })
    .then(response => response.json())
    .then(jokes => {
        jokeInfo = jokes.joke;
        console.log(jokeInfo);
        jokeOut.innerHTML = `<div id="jokeOut">"${jokes.joke}"</div>`;
    });

    showButtons();
}


//Exercici 3: Array de puntuació i data

const reportAcudits = [];

const boton1 = document.querySelector("#b1");
boton1.addEventListener("click", addRating);

const boton2 = document.querySelector("#b2");
boton2.addEventListener("click", addRating);

const boton3 = document.querySelector("#b3");
boton3.addEventListener("click", addRating);

function addRating(e) {

    let scoreInfo;

    if (e.target.id == "b1") scoreInfo = 1;
    if (e.target.id == "b2") scoreInfo = 2;
    if (e.target.id == "b3") scoreInfo = 3;

    let rating = {
        joke: jokeInfo,
        score: scoreInfo,
        date: new Date().toISOString()
    };

    reportAcudits.push(rating);
    console.log(reportAcudits);

    hideButtons();
}

function hideButtons() {
    boton1.style.visibility = 'hidden';
    boton2.style.visibility = 'hidden';
    boton3.style.visibility = 'hidden';
}

function showButtons() {
    boton1.style.visibility = 'visible';
    boton2.style.visibility = 'visible';
    boton3.style.visibility = 'visible';
}

//Exercici 4: El temps

const weatherHTML = document.querySelector("#weather");

const weatherCoord = "lat=38.967938&lon=1.272743";
const language = "CA";
const APIKey = "cf6b3b08d8458fe12e0dddab0b644c2a";

fetch(`https://api.openweathermap.org/data/2.5/weather?${weatherCoord}&appid=${APIKey}&lang=${language}`)
    .then(response => response.json())
    .then(items => {
        console.log(items);
        const location = items.name;
        const iconApi = items.weather[0].icon;
        const current = items.weather[0].description.toUpperCase();
       
        console.log(location, current);
        weatherHTML.innerHTML = `<div> Ciutat: ${location}</div>
                                 <div> Estat actual: ${current}</div>
                                 <img src=http://openweathermap.org/img/w/${iconApi}.png width= 75 />`;

    });
        

//Exercici 5:  Combinació d'acudits

const jokeButton = document.querySelector("#getJoke");
jokeButton.addEventListener("click", combineJokes);

const  jokeOut = document.querySelector("#joke");

var jokeDad, jokeNorris;
var rand = 0;

function combineJokes() {

    fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    })
    .then(response => response.json())
    .then(data => {
        jokeDad = data.joke;
        return fetch("https://api.chucknorris.io/jokes/random");
    })
    .then(response => response.json())
    .then(data => {
        jokeNorris = data.value;
        if (rand < 2) {
            jokeOut.innerHTML = `<div id="jokeOut">"${jokeDad}"</div>`;
            rand++;
        } else {
            jokeOut.innerHTML = `<div id="jokeOut">"${jokeNorris}"</div>`;
            rand = 0;
        }
    })

    showButtons();
}

//Con async await
/*async function fetchJoke() {
    const response = await  fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    const jokes = await response.json();
    console.log(jokes.joke);
} */


