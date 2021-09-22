const categoryUrl = "https://wordpress.relouding.eu/wp-json/wp/v2/posts?categories=16"
const categoryContainer = document.querySelector(".container-category");

async function getBlogPosts(url){
    try {
        const response = await fetch(url);
        const posts = await response.json();

        console.log(posts);

        posts.forEach(function(post){
            categoryContainer.innerHTML += `
            <div class="category-posts">
            <div><h2>${post.title.rendered}</h2></div>
            <div><a href="blogspecific.html?id=${post.id}">read more</a>
            </div>
            `
          })
        }
    
        catch(error) {
            console.log(error);
            categoryContainer.innerHTML = message("error", error);
        }
    }

getBlogPosts(categoryUrl);
