class BookList  {
    constructor(books, currentIndex=0) {
        this.books = books;
        this.index = 0;
        this.booksRed = books.forEach((book) => {
            if (book.read) {
                this.booksRed+=1;
            }
        })
        this.booksNotRed = (this.books.length - this.booksRed)
        this.currentBook = this.books[0]
        this.nextBook = this.books[1]
    }
    
    add(book) {
        this.books.push(book)
        if(book.read) {
            this.booksRed +=1;
        }
        return this.booksNotRed+=1
    }
    finishCurrentBook() {
        this.booksRed +=1;
        this.booksNotRed-=1;
        this.lastBook = this.currentBook
        this.currentBook = this.nextBook
    }

}

class Book {
    constructor(){
    this.title = title;
    this.genere = genere;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
    }

}