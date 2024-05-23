
let movieAPI = {};

// Search API   


function showAPI() {
    var showBtn = document.querySelector("#show");
    var showValue = document.querySelector("#Search");
    showBtn.addEventListener('click', () => {
        if (!showValue.value == "") {
            
            movieAPI = JSON.parse(showValue.value);
            console.log(movieAPI);
            fetchh();
            fetchDetail();
            showValue.value = "";
        } 
    });
}
// Search API




// Fetch Details

function fetchDetail() {
    let btn = document.querySelector("#fetch");
    btn.className = "d-block btn btn-primary"
    btn.addEventListener('click',()=>{
        alert(JSON.stringify(movieAPI))
    })
    
}

function  fetchh() {

let posterDiv = document.getElementById("poster");
let contentDiv = document.getElementById("content");
// For Poster
let moviePoster = movieAPI.Poster
const imgTag= document.createElement("img");
imgTag.setAttribute("src",`${moviePoster}`)
imgTag.setAttribute("alt",`${movieAPI.Title} Poster`)
posterDiv.appendChild(imgTag);

// For Title
const movieTitle = document.createElement("h3");
movieTitle.innerHTML = `<span class = Head> Title:</span> ${movieAPI.Title}`;
contentDiv.appendChild(movieTitle);
movieTitle.firstChild.style.color = "#00FDDC"
movieTitle.className = "mb-3 mt-5"
// For Genre
const movieGenre = document.createElement("h4");
movieGenre.innerHTML = `<span class = Head> Genre:</span> ${movieAPI.Genre}`;
contentDiv.appendChild(movieGenre);
movieGenre.firstChild.style.color = "#00FDDC"
movieGenre.className = "mb-3 mt-5"
// For Directors
const movieDirector = document.createElement("h4");
movieDirector.innerHTML = `<span class = Head> Directors:</span> ${movieAPI.Director}`;
contentDiv.appendChild(movieDirector);
movieDirector.firstChild.style.color = "#00FDDC"
movieDirector.className = "mb-3 mt-5"

// For Actors
const movieLC = document.createElement("h4");
movieLC.innerHTML = `<span class = Head> Actors:</span> ${movieAPI.Actors}`;
contentDiv.appendChild(movieLC);
movieLC.firstChild.style.color = "#00FDDC"
movieLC.className = "mb-3 mt-5"

document.body.style.backgroundColor = "#212121";
document.body.style.color = "#ffff";



}
  

// showAPI();