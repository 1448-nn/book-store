const books = require('./books')
booklength= books.length;
const BookTitle= books.BookTitle
const BookAuthor= books.author
const BookPages= books.pages
const BookPublisher= books.publisher

for(i=0; i<booklength; i++){
    console.log("..............................................")
console.log("Book:", books[i].title) 
    console.log("Author:", books[i].author)
    console.log("..............................................")
}
for(i=0; i<booklength; i++){
    if(books[i].publisher=="O'Reilly Media"){
     console.log(books[i].title)
    }
}
console.log("....................................................")
for(i=0; i<booklength; i++){
    if(books[i].pages > 350){
        console.log(books[i].title)
    }
}