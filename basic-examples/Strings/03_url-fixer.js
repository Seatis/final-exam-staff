'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

var url = "https//www.reddit.com/r/nevertellmethebots";
url = url.substr(0, 5) + ":" + url.substr(5);

// console.log(url.indexOf('//'));
// var urlArray = url.split("");
// urlArray.splice(url.indexOf('//'), 0, ":");
// url = urlArray.join("");

console.log(url);