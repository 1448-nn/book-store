
//const books = require('./books');

const books =require('./books');

//var script_tag= document.createElement('script');
//script_tag.setAttribute('type', 'text/javascript');
//script_tag.setAttribute('src', 'script.js')
//script_tag.onerror = function(){alert("loading failed!");}
//document.getElementsByTagName('body')[0].appendChild(script_tag)


const RowDiv = document.getElementById ("books");

books.forEach((book) =>{

const columnDiv =document.createElement("div");
columnDiv.classList.add("col-md-3");

const cardDiv = document.createElement("div");
cardDiv.classList.add("card");

const cardHeaderDiv = document.createElement("div");
cardHeaderDiv.classList.add("card-header");
cardHeaderDiv.innerHTML=book.title;

cardDiv.appendChild(cardHeaderDiv);

const cardBodyDiv = document.createElement("div");
cardBodyDiv.classList.add("card-body");

cardDiv.appendChild(cardBodyDiv);

const cardTitleDiv = document.createElement("div");
cardTitleDiv.classList.add("card-Title");
cardTitleDiv.innerHTML=book.subtitle;

cardBodyDiv.appendChild(cardTitleDiv);

const cardTextDiv = document.createElement("div");
cardTextDiv.classList.add("card-Text");
cardTextDiv.innerHTML=book.description;

cardBodyDiv.appendChild(cardTextDiv);

const cardAuthorDiv = document.createElement("div");
cardAuthorDiv.classList.add(["mt-2", "mb-2"]);

const emElement  = document.createElement("em");
const strElement = document.createElement("strong");
strElement.innerHTML= book.author;
emElement.appendChild(strElement);
cardAuthorDiv.appendChild(emElement);
cardBodyDiv.appendChild(cardAuthorDiv);

const cardFooterDiv = document.createElement("div");
cardFooterDiv.classList.add("card-footer");
const anchorElement = document.createElement("a");
anchorElement.setAttribute("href", book.website);
anchorElement.classList.add(["btn", "btn-primary"]);
anchorElement.innerHTML ="view Book Details";
cardFooterDiv.appendChild(anchorElement);
cardBodyDiv.appendChild(cardFooterDiv);

columnDiv.appendChild(cardDiv);
RowDiv.appendChild(columnDiv);

}); 
