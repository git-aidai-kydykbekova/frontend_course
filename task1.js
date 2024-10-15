const books = [
  { title: "Свидание со смертью", author: "Агата Кристи", isAvailable: true },
  { title: "Десять негритят", author: "Агата Кристи", isAvailable: false },
  { title: "Убийство по алфавиту", author: "Агата Кристи", isAvailable: true },
  { title: "Убийство в библиотеке", author: "Агата Кристи", isAvailable: false }
  { title: "У лукоморья дуб ", author: "Александр Пушкин", isAvailable: false }

];
function getBooksByAuthor(books, author) {
  return books
    .filter(book => book.author === author)
    .map(book => book.title);
}
    function countAvailableBooks(books) {
  return books.filter(book => book.isAvailable).length;
}
function lendBook(books, title) {
  const book = books.find(book => book.title === title);
  if (book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      return `Книга  ${title} была взята`;
    } else {
      return `Книга ${title} не доступна`;
    }
  } else {
    return `Унига ${title} нет в библиотеке!`;
  }
}

console.log(getBooksByAuthor(books, "Александр Пушкин"));
console.log(countAvailableBooks(books));
console.log(lendBook(books, "Убийство по алфавиту"));
console.log(lendBook(books, "Убийство по алфавиту"));
console.log(lendBook(books, "У лукоморья дуб "));
