import Book from './Book.js';

class Ebook extends Book {
    constructor (name, author, year, fileFormat) {
        super(name, author, year);
        this._fileFormat = fileFormat;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === "string" && value.trim() !== '' && value !== null) {
           this._name = value; 
        } else {
           console.log(`UNDEFINED`);
        }
    }

    get author() {
        return this._author;
     }

     set author(value) {
        if (typeof value === 'string' && value.trim() !== '' && value !== null) {
            this._author = value; 
         } else {
            console.log(`UNDEFINED`);
         }
     }

     get year() {
        return this._year;
     }

     set year(value) {
        if (typeof value === 'string' && value.trim() !== '' && value !== null) {
            this._year = value; 
         } else {
            console.log(`UNDEFINED`);
         }
     }

     get fileFormat () {
        return this._fileFormat;
     }

     set fileFormat(value) {
        if (typeof value === 'string' && value.trim() !== '' && value !== null) {
            this._fileFormat = value; 
         } else {
            console.log(`UNDEFINED`);
         }
     }

    printInfo() {
        console.log(`The book ${this.name} by ${this.author} was issued in ${this.year}. In our library this book is availible in ${this.fileFormat}`);
    }

    static fromBook(book, fileFormat) {
      return new Ebook(book.name, book.author, book.year, fileFormat);
   }
}

// Task 1
 const book5 = new Ebook("The Women: A Novel", "Kristin Hannah", 2024, ".txt, .pdf");
 const book6 = new Ebook("The Memory of an Elephant", "Alex Lasker", 2022, ".epub, .txt, .pdf");

 book5.printInfo();
 book6.printInfo();


// Task 2 - getters and setters adding
const book7 = new Ebook();

book7.name = "The Midnight Library";
book7.author = ' ';
book7.year = 1984;
book7.fileFormat = ".pdf";

console.log(book7.fileFormat);

// Task 3 - calling static method for finding the oldest book
const books = new Book("The Midnight Library", "Matt Haig", 2020);
const ebooks = new Ebook("The Women: A Novel", "Kristin Hannah", 2024, ".txt, .pdf");

const oldestBook = Book.getOldestBook([books, ebooks])
console.log(oldestBook)

// Task 4 - static method returning exemplair od Ebook class
const book = new Book('Some book', 'Idont Know', 2030);
const ebook = Ebook.fromBook(book, '.txt');
console.log(ebook);


