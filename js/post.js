const postContainer = document.querySelector("#postContainer");

const titleDetails = document.querySelector("#titledetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const postUrl = "https://ingridblixdyrseth.no/blog/wp-json/wp/v2/posts/" + id;

console.log(postUrl);

async function getOnePost() {
    try{
        const response = await fetch(postUrl);
        const detail = await response.json();

        console.log(detail);

        postContainer.innerHTML = "";

        createHtml(detail);



    }
    catch(error) {
        console.log(error);
        postContainer.innerHTML = "error";
    }
}

getOnePost();

function createHtml(detail) {
    postContainer.innerHTML += `<h1>${detail.title.rendered}</h1>
    <div class="modal" id="modal">
    <span class="close">&times;</span>
    <img class="modal-img" src="${detail.featured_media_src_url}"/>
    </div>
    <div class="detail-text">
    <img class="first-img" src="${detail.featured_media_src_url}"/>
    <p>${detail.content.rendered}</p>
    </div>`

    titleDetails.innerHTML = `Skate Bebé - ${detail.title.rendered}`
  
    const picture = document.getElementsByClassName("first-img");
    const modal = document.querySelector("#modal");
    const modalImage = document.querySelector(".modal-img");
    const pictures = document.getElementsByClassName("wp-block-image");
    const modalImages = document.getElementsByClassName("wp-block-image size-large");
    const close = document.querySelector(".close");
/*
    pictures[0].onclick = function() {
        pictures[0].addClass("modal-img");
        console.log("Worth a try");
    }*/

    picture[0].onclick = function() {
        modal.style.display = "block";
        console.log("MY mom");
    }

    close.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if(event.target == modal) {
            modal.style.display = "none";
        }
    }



}




