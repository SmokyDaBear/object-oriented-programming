/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */
function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}
const currentYear = 2025;
Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author} is a ${this.genre} book published in ${this.year}.`;
};
Book.prototype.isClassic = function () {
  return this.year < currentYear - 50;
};
Book.prototype.updateYear = function (newYear) {
  this.year = newYear;
  return `Updated ${this.title}'s publishing year to ${this.year}`;
};
Book.prototype.changeGenre = function (newGenre) {
  this.genre = newGenre;
  return `${this.title}'s genre updated to ${this.genre}`;
};

const goodBook = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  1960,
  "Fiction"
);
console.log(goodBook);
console.log(goodBook.getSummary());
console.log(`${goodBook.title} is a classic: ${goodBook.isClassic()}`);
console.log(goodBook.updateYear(2000));
console.log(goodBook.changeGenre("Historical Fiction"));
console.log(goodBook.getSummary());
