const detailContainer = document.querySelector(".container-posts");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://wordpress.relouding.eu/wp-json/wp/v2/posts/" + id;

console.log(url);

async function fetchPost() {

    try {
        const response = await fetch(url);
        const post = await response.json();

        console.log(post);

        createHtml(post);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("there is an error", error);
    }
    
}

fetchPost();

function createHtml(post) {
    document.title = `${post.title.rendered}`;
    detailContainer.innerHTML = `
        <div class="blog-posts image">
        <div><h1>${post.title.rendered}</h1></div>
        <div><p>${post.content.rendered}</p></div>
        <img src="${post.better_featured_image.source_url}" alt="${post.title.rendered}">
        <p>&#9998; ${new Date(post.date).toLocaleString()}</p>
        </div>
    `;
}

function getFullScreen() {}
const imgs = document.querySelectorAll('.image img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});