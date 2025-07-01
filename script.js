const booksContainer = document.querySelector(".books-grid");
const formModal = document.querySelector(".form-modal");
const bookFormSubmition = document.querySelector(".add-book-form");
const bookFormCancel = document.querySelector(".book-form-cancel");
const addBook = document.querySelector(".add-book");

const MyLibrary = [{
    id: crypto.randomUUID(),
    title: "The Clockwork Nightingale's Secret",
    img: "/media/book-covers/image 1.png",
    author: "Automatonia Springs",
    year: 1875,
    noOfPages: 320
  },{
    id: crypto.randomUUID(),
    title: "Echoes from the Undermountain Bazaar",
    img: "/media/book-covers/image 2.png",
    author: "Underhill Gnome",
    year: 987,
    noOfPages: 450
  },{
    id: crypto.randomUUID(),
    title: "The Last Map to Nowhere",
    img: "/media/book-covers/image 3.png",
    author: "Wanderer's Companion",
    year: 1602,
    noOfPages: 288
  },{
    id: crypto.randomUUID(),
    title: "The Quantum Garden: Growing Entangled Tomatoes",
    img: "/media/book-covers/image 4.png",
    author: "Dr. Bloom Pixel",
    year: 2065,
    noOfPages: 412
  },{
    id: crypto.randomUUID(),
    title: "A Compendium of Complaining Algorithms",
    img: "/media/book-covers/image 5.png",
    author: "A.I. Grumbles",
    year: 2030,
    noOfPages: 198
  },{
    id: crypto.randomUUID(),
    title: "The Labyrinth of Lost Algorithms",
    img: "/media/book-covers/image 7.png",
    author: "Code Weaver",
    year: 2050,
    noOfPages: 550
  },{
    id: crypto.randomUUID(),
    title: "Echoes from the Sunken Library",
    img: "/media/book-covers/image 8.png",
    author: "Deep Sea Scribe",
    year: 1788,
    noOfPages: 365
  }];





function Book(id, title, img, author, noOfPages, year) {
  this.id = id;
  this.title = title;
  this.img = img;
  this.author = author;
  this.noOfPages = noOfPages;
  this.year = year;
}

function addBookToLibrary(title, img, author, noOfPages, year) {
  const uniqueId = crypto.randomUUID(); 
  const book = new Book(uniqueId, title, img, author, noOfPages, year);
  MyLibrary.push(book);
}

function createBookCard(book) {
  const bookElement = document.createElement('div');
  bookElement.className = 'book';
  bookElement.innerHTML = `
      <div class="book-cover">
      <img src="${book.img}" alt="${book.title}">
      </div>
      <h4 class="book-title">${book.title}</h4>
      <p class="book-author">${book.author}</p>
      <div class="year-pages-container">
        <p class="book-year">${book.year}</p>
        <p class="no-of-pages">${book.noOfPages}page</p>
      </div>
  `;
  booksContainer.appendChild(bookElement);
}

function toTitleCase(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


MyLibrary.forEach(book => {
  createBookCard(book);
});

addBook.addEventListener("click", () => {
  formModal.showModal();
});

bookFormCancel.addEventListener("click", () => {
  formModal.close();
})

bookFormSubmition.addEventListener("submit", () => {

  const title = toTitleCase(document.getElementById('form-book-title').value);
  const author = toTitleCase(document.getElementById('form-book-author').value);
  const year = document.getElementById('form-book-year').value;
  const pages = document.getElementById('form-book-pages').value;
  const img = "/media/book-covers/default-cover.png"; //should be added in form later;

  addBookToLibrary(title, img, author, pages, year);
  createBookCard(MyLibrary[MyLibrary.length - 1]);

  bookFormSubmition.reset();
})







