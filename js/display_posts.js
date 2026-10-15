async function displayPosts(){
  const destination = document.getElementById("feed-div");
  const posts = await feed_loader.getPostsFromStorage();
  for(const post of posts){
    console.log(post);
    destination.innerHTML += `
    <div class = 'post'>
      <h4><a href=${post.link.innerHTML}>${post.title.innerHTML}</a></h4>
      <p>${post.description.innerHTML}</p>
    </div>
    `
    
  }
}
feed_loader.displayFeeds();
displayPosts();