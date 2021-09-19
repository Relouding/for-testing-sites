const baseUrl = "https://wordpress.relouding.eu/wp-json/wp/v2/comments"
const productContainer = document.querySelector(".container-comments")


async function getBlogComments(url){
    const response = await fetch(url);
    const comments = await response.json();

    comments.forEach(function(comment){
        productContainer.innerHTML += `
        <div class="blog-comments">
        <div><p>${comment.content.rendered}</p></div>
        </div>
        `
    })
}

getBlogComments(baseUrl);
