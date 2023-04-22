//api.giphy.com/v1/gifs/search?q=&api_key=JSewDw2NG8qKekya6PqHYlJYQTzPthUw&limit=10
const searchBtn = document.querySelector('#search-btn');
const url = `https://api.giphy.com/v1/gifs/search`;
let search = `?q=`;
const key = "&api-key=JSewDw2NG8qKekya6PqHYlJYQTzPthUw";
const limitation = `&limit=40`;

let q = "";

let urlComplete = "";




searchBtn.onclick = (e) => {
    e.preventDefault();
    q = document.getElementById('search').value;
    urlComplete = url + search + q + key + limitation;
    getData();
}

const getData = async () => {

    await fetch(urlComplete).then((response) => {
        return response.json();
    }).then((giphy) => {


        for (let i = 0; i < giphy.data.length; i++) {
            const gif = document.createElement('img');

            gif.src = giphy.data[i].images["original"].url;
            gif.className = "gif-img";
            const portfolio = document.getElementById("portfolio");
            portfolio.appendChild(gif);
        }
    })
}
