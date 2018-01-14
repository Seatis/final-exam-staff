// Document Object Model (DOM):
// When a web page is loaded, the browser creates a Document Object Model of the page.
// DOM connects web pages to scripts or programming languages (JS).

  // accessing elements:
  document.getElementById('id');
  document.querySelector('.classname');
  document.querySelector('span'); // the first span html element
  document.querySelectorAll('p'); // all p html elements (list)

  // creating, inserting & removing elements:
  var myArticle = document.createElement('article');
  var newP = document.createElement('p');
  myArticle.appendChild(newP);
  myArticle.removeChild(newP);

  // an element's contents:
  newP.textContent = "This is a new p tag"; // it means just a text
  newP.innerHTML = "This is a p tag"  // it means the html content

  // element attributes:element attributes
  var myImg = document.querySelector('img');
  myImg.getAttribute('src');
  myImg.setAttribute('src', 'url');
  myButton.setAttribute('disabled', true);




