# rss-reader
Mind the dust! I'm still working on data processing and display. This is an RSS aggregator that tries to be entirely local. The primary reason for this is that deploying a server is not feasible for me here on campus. Instead, this application stores data in the web browser, bypassing the need for accounts or servers and requiring only an internet connection.

While I have learned and worked with JavaScript for one of the RIZE courses, this project is an opportunity to actually engage with the language rather than "learning for the test." Additionally, it provides more practice at reading documentation and learning new formats and systems.

## How it Works
### Adding Feeds
This RSS reader is in theory very simple. To add a feed, you input the link to the RSS feed. Not a lot of big media platforms support RSS (It doesn't generate clicks or ad views is one of my theories), but there are plenty of great feeds out there. Within `add_feed.js`, I have some test data loaded in for three different blogs of some kind:
- Tumblr staff account
- Keith Baker's blog
- Hank Green's BlueSky page  

The program retrieves these RSS feeds, extracts essential information to identify the feed later (name, description, the source URL, and the feed URL), and stores it as an object on the user's computer using JavaScript's `LocalStorage` feature.

### Retrieval
When the main page is loaded, the system looks at `LocalStorage` and extracts the feeds from it. The source URL of the feeds is then accessed, and all of the posts (described with the XML `item` tag) are taken, processed into simpler objects, passed to an array, sorted by date, and displayed.  

The present issue is with accessing the `post` objects to process for display.

## Usage
Due to CORS policies not allowing frontend scripts to access other links on the internet, the only way this works is to not use a browser. Here is the way I am getting it to work for testing until I can figure out a proxy for this or refactor to have a backend:
1. Clone the repository
2. Open the folder in VSCode
3. Right click `index.html` and select the "Open in Integrated Browser" option  

Nothing will display for now, as there are some errors with retrieval that need addressed. However, in the console you should be able to find some of the debug stuff I've written, including what has been stored