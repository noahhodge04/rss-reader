let feed_loader = new FeedLoader();  // creates instance of the FeedLoader class (i know i shouldn't use snake case and camel case at the same time)

// TODO: integrate with an HTML form to add feeds

// test data (works when on VSCode for some reason)
feed_loader.addFeed("https://staff.tumblr.com/rss");
feed_loader.addFeed("https://keith-baker.com/feed");
feed_loader.addFeed("https://bsky.app/profile/hankgreen.bsky.social/rss");
feed_loader.addFeed("https://bsky.app/profile/hankgreen.bsky.social/rss");  // Duplicate feed to test anti-duplicate feature

console.log(
  localStorage.getItem("entries")
);
