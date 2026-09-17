class FeedLoader {
  addFeed(source){
    const doc = this.#retrieveFeed(source);
    console.log(doc);
    return;
  }

  #retrieveFeed(source){
    // Input string URL, return JavaScript Document
    fetch(source)
      .then(response => response.text())
      .then(text => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/xml");
        return doc
      });
  }

  #getComponent(tag){
    // Retrieve individual component, if it exists in the document
    return;
  }
}

feed_loader = new FeedLoader();
feed_loader.addFeed("https://bsky.app/profile/hankgreen.bsky.social/rss");