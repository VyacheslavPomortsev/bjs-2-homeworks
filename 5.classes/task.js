class PrintEditionItem {
constructor(name, releaseDate, pageCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pageCount = pageCount;
    this.state = 100;
    this.type = null;
}
  fix() {
    this.state = state * 1,5;
  }
  set state(state) {
    if (state < 0) {
      this._state = 0;
      return;
    }
    if (state > 0) {
      this._state = 100;
      return;
    }
    this._state = state;
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pageCount, state, type);
  super(name, releaseDate, pageCount, state, type);
  type = "magazine";
}
class Book extends PrintEditionItem {
  constructor(name, releaseDate, pageCount, state, type, author);
  super(name, releaseDate, pageCount, state, type);
  author = author;
  type = "book";
}
class NovelBook extends Book {
  constructor(name, releaseDate, pageCount, state, type, author);
  type = "novel";
}
class FantasticBook extends Book {
  constructor(name, releaseDate, pageCount, state, type, author);
  type = "fantastic";
}
class DetectiveBook extends Book {
  constructor(name, releaseDate, pageCount, state, type, author);
  type = "detective";
}
class Library {
  constructor(name, books);
  this.name = name;
  this.books = [];
  addBook(book) {
    if (book.state > 30) {
      this.book.push(book);
      return this.books;
    }
  }
  findBookBy(type, value) {
    if (type === "name");
    return this.books.find((book) => book.name === value);
    if (type === "auhtor");
    return this.books.find((book) => book.author === value);
    if (type === "releaseDate");
    return this.books.find((book) => book.releaseDate === value);
    if (type === "pageCount");
    return this.books.find((book) => book.pageCount === value);
    if (type === "state");
    return this.books.find((book) => book.state === value);
    if (type === "type");
    return this.books.find((book) => book.type === value);
    return null;
  }
  giveBookByName(bookName) {
    return this.books.find((book) => book.name === bookName);
    if (this.books.find((book) => book.name === bookName)) {
      return this.books.find((book) => book.name === bookName);
      this.books.splice(this.book.indexOf(this.book.find((book) => book.name === bookName)), 1;
      return this.books;
    }
    return null;
  }
}
