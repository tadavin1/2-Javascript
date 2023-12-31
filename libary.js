'use strict'

class Book {
    constructor(title, author, available = true){
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

const library = {
   books: [],

   addBook: function(title, author){
    // using Class as a constructor or mold for new books
        const book = new Book(title, author) 
        // working with an array as a storage use push to add to array
        this.books.push(book); 
        console.log(`added ${this.title} by ${this.author} to the libary! There are now ${this.books.length} in the library`)
   },


   checkOutBook: function(title){
       for (let book of this.books){
        if(book.title === title && book.available){
            found = true;
            book.available = false;
            console.log(`You checked out ${book.tile}`)
        }
       }
   }
}






console.log(`There are currently ${library.books.length} books in the library's database.`);
            library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
            receiveBooks(newBooks);
            library.checkOutBook("Eloquent JavaScript");
            library.checkOutBook("Grokking the Coding Interview");
            library.getAvailableBooks();