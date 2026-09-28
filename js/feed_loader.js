class FeedLoader {
  async addFeed(source){                           // Input source URL, add feed information to localStorage
    const doc = await this.#retrieveFeed(source);  // waits for the Document object to arrive
    console.log(doc);
    let feed = {                                   // retrieves the essential channel information for storage and puts it in an object
      title: doc.getElementsByTagName("title").item(0).innerHTML,
      description: doc.getElementsByTagName("description").item(0).innerHTML,
      link: doc.getElementsByTagName("link").item(0).innerHTML,
      source: source
    }
    
    var existingEntries = JSON.parse(localStorage.getItem("entries"));                  // retrieves "entries" item from localStorage as an array of objects
    if(existingEntries == null){  existingEntries = [];  }                              // creates empty array if one did not exist in storage
    if(!JSON.stringify(existingEntries).includes(source)){existingEntries.push(feed);}  // checks if the feed is already in storage (by URL), and adds it if not
    localStorage.setItem("entries", JSON.stringify(existingEntries));                   // writes the new array into storage
    
    return;
  }

  async #retrieveFeed(source){                           // Input string URL, return JavaScript Document
    let doc;                                             // defines "doc" so that it can be used outside of the "fetch" block
    await fetch(source)                                  // waits for the program to grab the data from the URL
      .then((response) => response.text())               // text extraction
      .then((text) => {
        const parser = new DOMParser();                  // creates document parser object
        doc = parser.parseFromString(text, "text/xml");  // parses XML from website into Document object
      });
    return doc;
  }

  extractFeedItems(doc){
    posts = [];
    items = doc.getElementsByTagName("item");
    // TODO: process items into a more usable object
    for(item of items){
      posts.append(
        {
          title: item.getElementsByTagName("title")[0].innerHTML,
          description: item.getElementsByTagName("description")[0].innerHTML,
          pubDate: new Date(item.getElementsByTagName("pubDate")[0].innerHTML)
        }
      )
    }
    return posts;
  }

  async getFeedContentsFromStorage(){
    for(feed in localStorage.getItem("entries")){
      // TODO: retrieve feed, extract items, and possibly do some other processing
    }
  }
}