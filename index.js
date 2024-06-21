"use strict";
//defining variables
const book1 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "9780060935467"
};
const book2 = { title: "1984", author: "George Orwell", isbn: "9780451524935" };
const book3 = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  isbn: "9781503290563"
};
const book4 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "9780743273565"
};
const book5 = {
  title: "Moby-Dick",
  author: "Herman Melville",
  isbn: "9781503280786"
};
//library class
class Library {
  constructor() {
    this.members = [];
    this.books = [];
  }
  registerMember(name) {
    const id = this.members.length + 1;
    const member = new Member(name, id);
    this.members.push(member);
  }
  addNewBook(book) {
    const title = book.title;
    const author = book.author;
    const isbn = book.isbn;
    const id = this.books.length + 1;
    const newbook = new Book(title, author, isbn, id);
    this.books.push(newbook);
  }
  borrowBook(user, isbn) {
    const libMembers = this.members;
    const member = libMembers.find((member) => member.id === user.id);
    if (!member) return new Error("Hey you are not registered yet!");
    if (member.borrowedBooks.length >= 3)
      return new Error("Hey you have reached the maximum pick limit!");
    const libBooks = this.books;
    const foundBook = libBooks.find((book) => book.isbn === isbn);
    if (!foundBook || foundBook.borrowed)
      return new Error(`Sorry this is not availiable currently!`);
    member.pickBook(foundBook);
    foundBook.isBorrowed();
    return foundBook;
  }
}

//Member class
class Member {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }

  pickBook(book) {
    this.borrowedBooks.push(book);
  }

  returnBook(bookToBeReturned) {
    const book = this.borrowedBooks.find(
      (book) => book.isbn === bookToBeReturned.isbn
    );
    if (book) {
      this.borrowedBooks = this.borrowedBooks.filter(
        (book) => book.isbn !== bookToBeReturned.isbn
      );

      book.borrowed = false;
    }
  }
}

//Book class
class Book {
  constructor(title, author, isbn, id) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.id = id;
    this.borrowed = false;
  }
  isBorrowed() {
    this.borrowed = true;
  }
}

//Remove the comments bellow to test how this Library management system works.

/* const elib = new Library();
elib.registerMember("gideon");
elib.registerMember("nathan");
elib.registerMember("ifeoma");
elib.addNewBook(book1);
elib.addNewBook(book2);
elib.addNewBook(book3);
elib.addNewBook(book4);
elib.addNewBook(book5);

const user = elib.members[0];
const borrowedBook = elib.borrowBook(user, "9780060935467");

console.log(user.name, user.borrowedBooks);
console.log(elib.books);
user.returnBook(book1);
console.log(user.name, user.borrowedBooks);
console.log(elib.books);
 */
