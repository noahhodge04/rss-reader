
document.getElementById("feed-div").innerHTML = "beans";

function extractText(doc, id) { return doc.getElementsByTagName(id).item(0).innerHTML; }

/* Code from MDN docs on XML parsing, with sample data replaced */
fetch("https://bsky.app/profile/hankgreen.bsky.social/rss") /* Test data starts with tumblr because of pre-existing formatting */
  .then((response) => response.text())
  .then((text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    items = doc.getElementsByTagName("item");
    for (let i of items){
        console.log(i.getElementsByTagName("title"));
        /* TODO: Figure out how to get the HTML to be read as HTML, not a string */
        /*<h3>${extractText(i,"title")}</h3>    title code, does not apply to bsky */
        /* different RSS sources will likely need different HTML constructors */
        content = `
          <div>
            
            ${extractText(i,"description")} </br>
            <a href="${extractText(i,"link")}">link</a>
          </div>
        `;
        document.getElementById("feed-div").insertAdjacentHTML('beforeend',content);

    }
  });