# Library Management System

A simple library management system implemented in JavaScript. This system allows for managing members and books, borrowing and returning books, and maintaining the status of borrowed books.

## Features

- Register new members
- Add new books to the library
- Borrow books
- Return books
- Check the status of books (borrowed or available)

## Classes

### Library

The `Library` class manages the members and books.

#### Methods

- `registerMember(name)`: Registers a new member with the given name.
- `addNewBook(book)`: Adds a new book to the library.
- `borrowBook(user, isbn)`: Allows a member to borrow a book if they are registered and have not reached the borrowing limit.
- `returnBook(user, isbn)`: Allows a member to return a borrowed book.

### Member

The `Member` class represents a library member.

#### Methods

- `pickBook(book)`: Adds a book to the member's list of borrowed books.
- `returnBook(bookToBeReturned)`: Removes a book from the member's list of borrowed books and marks it as available in the library.

### Book

The `Book` class represents a book in the library.

#### Methods

- `isBorrowed()`: Marks the book as borrowed.
- `returnBook()`: Marks the book as available.

## Usage

### Defining Variables

```javascript
const book1 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "9780060935467"
};
const book2 = { title: "1984", author: "George Orwell", isbn: "9780451524935" };
```

### Initialization of the library

```javaScript
const elib = new Library();
elib.registerMember("gideon");
elib.registerMember("nathan");
elib.addNewBook(book1);
elib.addNewBook(book2);
```

### Borrowing a book

```javaScript
//This is an exapple how to request for a book
const user = elib.members[0];
const borrowedBook = elib.borrowBook(user, "9780060935467");
console.log(user.name, user.borrowedBooks);
```

### Returning a book

```javaScript
//This is an exmple showing how the user returns a book previously collected
user.returnBook(book1);
console.log(user.name, user.borrowedBooks);
console.log(elib.books);
```

### Example output

```javaScript
// After borrowing a book the user borrowed book array should be looking this way
gideon [ { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780060935467', id: 1, borrowed: true } ]

// After returning the book the borrowed property goes back to false
[
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780060935467', id: 1, borrowed: false },
  { title: '1984', author: 'George Orwell', isbn: '9780451524935', id: 2, borrowed: false },]

```

### Contribution

A project surely has a beginning but its a continous work from there. You can make changes and create a pr.

This `README.md` file provides an overview of the library management system, details the main classes and their methods, and includes examples of how to use the system. It also encourages contributions and mentions the licensing. Happy Coding!

```

```
