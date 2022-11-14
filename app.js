console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// URLS
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "TmKPOLCGjpC7Emhnuc5esNIOJHDEAJsx";

// Selecting Elements
let feedbackEle = document.querySelector("#feedback")
let inputSearchElement = document.querySelector("#searchWord")
let searchBtn = document.querySelector("#submitSearch")
let gifEle = document.querySelector("#imageContainer > img")


// Event Handlers
searchBtn.addEventListener('click', (event) => {
    let searchTerm = inputSearchElement.value;

    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`)
    .then((res) => res.json())
    .then((body) => {
        // show the gif in the dom
        gifEle.src = body.data.images.original.url;
    })
    .catch((err) => {
        console.error(err);
        // show the error message in the dom
        feedbackEle.textContent = err.message;
    });
});
