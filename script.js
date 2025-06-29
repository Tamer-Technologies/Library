const MyLibrary = [];

function Book(id, title, img, author, year) {
  this.id = id;
  this.title = title;
  this.img = img;
  this.author = author;
  this.year = year;
}

function addBookToLibrary(title, img, author, year) {
  const uniqueId = crypto.randomUUID(); 
  const book = new Book(uniqueId, title, img, author, year);
  MyLibrary.push(book);
}



