const commentContainer = document.querySelector(".container-comments");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const baseUrl = "https://wordpress.relouding.eu/wp-json/wp/v2/posts/comments";

console.log(baseUrl);


async function getBlogComments(url){
    const response = await fetch(url);
    const comments = await response.json();

    console.log(comments);

    comments.forEach(function(comment) {
        if(comment.post == 69){
        commentContainer.innerHTML += `
        <div class="blog-comments">
        <div><p>${comment.content.rendered}test</p></div>
        </div>
        `
    }
  })
}

getBlogComments(baseUrl);
