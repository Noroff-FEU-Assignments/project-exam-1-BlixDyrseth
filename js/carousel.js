const url = "https://ingridblixdyrseth.no/blog/wp-json/wp/v2/posts?per_page=12&?_embed";

const carouselContainer = document.querySelector(".carousel-container");

const nextButton = document.querySelector(".carousel-button--right");
const prevButton = document.querySelector(".carousel-button--left");

async function getLastPosts() {
    try {
        const response = await fetch(url);
        const latest = await response.json();

        carouselContainer.innerHTML = "";

        for(let i = 0; i <= 8; i++ ) {

            const lastPost = latest[i];

            const image = lastPost.featured_media_src_url;

            
            carouselContainer.innerHTML +=`<section class="carousel-slide">
            <a href="post.html?id=${lastPost.id}">
            <section class="carousel-slide"><img class="carousel-img" src="${image}"/>
            <div class="carousel-text-bg">
             <p class="carousel-text">${lastPost.title.rendered}</p>
             </div>
             </a>
             </section>`

        }
 
   }
    catch(error) {
        console.log(error);
        carouselContainer.innerHTML = "error";
    }
}


getLastPosts();

const track = document.querySelector(".carousel");
const slide = document.getElementsByClassName("carousel-track");


let index = 0;

    nextButton.addEventListener("click", () => {

        index = (index < 6) ? index + 1 : 6;
        carouselContainer.style.transform = "translate(" + (index) * -420 + "px)";
      
        console.log(index);
    
        });

     prevButton.addEventListener("click", () => {

            console.log("Howdy");
            index = (index < 7) ? index - 1 : 3;
            carouselContainer.style.transform = "translate(" + (index) * -420 + "px)";
        
            console.log(index);
        });



