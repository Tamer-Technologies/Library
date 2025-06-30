const booksContainer = document.querySelector(".books-grid");

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


MyLibrary.forEach(book => {
  const bookElement = document.createElement('div');
  bookElement.className = 'book';
  bookElement.innerHTML = `
      <div class="book-cover">
      <img src="/media/unknown-cover.jpg" alt="${book.title}">
      </div>
      <h4 class="book-title">${book.title}</h4>
      <p class="book-author">${book.author}</p>
      <p class="book-year">${book.year}</p>
  `;
  booksContainer.appendChild(bookElement);

})



