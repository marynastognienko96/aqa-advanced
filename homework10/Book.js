class Book {
    constructor (name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
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
    
    printInfo() {
        console.log(`The book ${this.name} by ${this.author} was issued in ${this.year}`);
    }

    static getOldestBook(books) {
        return books.reduce((oldest, current) => {
            return (current.year < oldest.year) ? current : oldest;
        });
    }
}

// Task 1 - calling printInfo() method
 const book1 = new Book("1984", "George Orwell", 1945);
 const book2 = new Book("The Midnight Library", "Matt Haig", 2020);

 book1.printInfo();
 book2.printInfo();

// Task 2 - getters and setters adding
const book3 = new Book();
const book4 = new Book();

book3.name = 23;
console.log(book3.name);

book4.author = ' ';
console.log(book4.author);


export default Book;