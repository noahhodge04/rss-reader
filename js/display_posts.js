async function displayPosts(){
  let posts;
  posts = await feed_loader.getPostsFromStorage();
  console.log(posts);
}
displayPosts();