async function displayPosts(){
  const destination = document.getElementById("feed-div");
  const posts = await feed_loader.getPostsFromStorage();
  for(const post in posts){
    console.log(post);
    destination.innerHTML += `
    <div class = 'post'>
      <h4>${post.title}</h4>
      <p>${post.description}</p>
    </div>
    `
    
  }
}
feed_loader.displayFeeds();
displayPosts();