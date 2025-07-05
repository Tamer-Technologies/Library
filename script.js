const booksContainer = document.querySelector(".books-grid");
const formModal = document.querySelector(".form-modal");
const bookFormSubmition = document.querySelector(".add-book-form");
const bookFormCancel = document.querySelector(".book-form-cancel");
const addBook = document.querySelector(".add-book");
const formBookCover = document.querySelector("#form-book-cover");
const formCoverView = document.querySelector(".cover-view");


const MyLibrary = [{
    id: crypto.randomUUID(),
    title: "The Clockwork Nightingale's Secret",
    img: "/media/book-covers/image 1.png",
    author: "Automatonia Springs",
    year: 1875,
    pages: 320,
    readStatus: false
  },{
    id: crypto.randomUUID(),
    title: "Echoes from the Undermountain Bazaar",
    img: "/media/book-covers/image 2.png",
    author: "Underhill Gnome",
    year: 987,
    pages: 450,
    readStatus: false
  },{
    id: crypto.randomUUID(),
    title: "The Last Map to Nowhere",
    img: "/media/book-covers/image 3.png",
    author: "Wanderer's Companion",
    year: 1602,
    pages: 288,
    readStatus: false
  },{
    id: crypto.randomUUID(),
    title: "The Quantum Garden: Growing Entangled Tomatoes",
    img: "/media/book-covers/image 4.png",
    author: "Dr. Bloom Pixel",
    year: 2065,
    pages: 412,
    readStatus: false
  },{
    id: crypto.randomUUID(),
    title: "A Compendium of Complaining Algorithms",
    img: "/media/book-covers/image 5.png",
    author: "A.I. Grumbles",
    year: 2030,
    pages: 198,
    readStatus: false
  },{
    id: crypto.randomUUID(),
    title: "The Labyrinth of Lost Algorithms",
    img: "/media/book-covers/image 7.png",
    author: "Code Weaver",
    year: 2050,
    pages: 550,
    readStatus: false
  },{
    id: crypto.randomUUID(),
    title: "Echoes from the Sunken Library",
    img: "/media/book-covers/image 8.png",
    author: "Deep Sea Scribe",
    year: 1788,
    pages: 365,
    readStatus: false
  }];

  let newBookCoverURL = "";


function Book(id, title, img, author, pages, year, readStatus) {
  this.id = id;
  this.title = title;
  this.img = img;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.readStatus = readStatus;

  this.toggleRead = function() {
    this.readStatus = !this.readStatus;
  }
}

function addBookToLibrary(title, img, author, pages, year, readStatus = false) {
  const uniqueId = crypto.randomUUID(); 
  const book = new Book(uniqueId, title, img, author, pages, year, readStatus);
  MyLibrary.push(book);
}

function createBookCard(book) {
  const bookElement = document.createElement('div');
  bookElement.className = 'book';
  bookElement.dataset.id = book.id;
  bookElement.innerHTML = `
      <div class="book-cover">
      <img src="${book.img}" alt="${book.title}">
      </div>
      <div class="book-data">
        <h4 class="book-title">${book.title}</h4>
        <p class="book-author">by ${book.author}</p>
        <div class="space-between-container">
          <p class="book-year">${book.year}/yr</p>
          <p class="no-of-pages">${book.pages}/pg</p>
        </div>
        <div class="space-between-container">
          <div class="read-state-container">
          <input type="checkbox" name="read-state" id="read-state-${book.id}"
           ${book.readStatus && "checked"}>
          <label for="read-state-${book.id}" class="read-toggle" data-id="${book.id}"></label>
          <span class="toggle-msg-${book.id}">${book.readStatus ? "Read" : "Not Read"}</span>
          </div>
          <p class="button clear-card" data-id="${book.id}">Remove</p>
        </div>
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


function resetBookCoverURL() {
  newBookCoverURL = "";
  formCoverView.style.backgroundImage = "";
}

function getBookIndex(id) {
  const bookIndex = MyLibrary.findIndex(obj => obj.id === id);
  return bookIndex;
}

function toggleReadBook(id) {
  const bookIndex = getBookIndex(id);
  MyLibrary[bookIndex].readStatus = !MyLibrary[bookIndex].readStatus;
} 

function removeBook(id) {
  const bookIndex = getBookIndex(id);
  document.querySelector(`[data-id="${id}"]`).remove();
  MyLibrary.splice(bookIndex, 1);
}

function updateReadStatus(id) {
  const bookIndex = getBookIndex(id);
  const toggleMsg = document.querySelector(`.toggle-msg-${id}`);
  if (MyLibrary[bookIndex].readStatus) {
    toggleMsg.innerText = "Read";
  } else {
    toggleMsg.innerHTML = "Not Read";
  }
}


MyLibrary.forEach(book => {
  createBookCard(book);
});



addBook.addEventListener("click", () => {
  formModal.showModal();
});

bookFormCancel.addEventListener("click", () => {
  formModal.close();
  resetBookCoverURL();
});


formBookCover.addEventListener("change", () => {
  const image = formBookCover.files[0];
  formCoverView.style.backgroundImage = `url(${URL.createObjectURL(image)})`;
  newBookCoverURL = `${URL.createObjectURL(image)}`
})

bookFormSubmition.addEventListener("submit", () => {

  const title = toTitleCase(document.getElementById('form-book-title').value);
  const author = toTitleCase(document.getElementById('form-book-author').value);
  const year = document.getElementById('form-book-year').value;
  const pages = document.getElementById('form-book-pages').value;
  const img = newBookCoverURL ? newBookCoverURL : "/media/book-covers/default-cover.png";
  resetBookCoverURL();

  addBookToLibrary(title, img, author, pages, year);
  createBookCard(MyLibrary[MyLibrary.length - 1]);

  bookFormSubmition.reset();
})

const clearCards = document.querySelectorAll(".clear-card");

clearCards.forEach(card => {
  card.addEventListener("click", () => {
  const elementId = card.dataset.id;
  removeBook(elementId);
});
});



const readToggles = document.querySelectorAll(".read-toggle");

readToggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const elementId = toggle.dataset.id;
    toggleReadBook(elementId);
    updateReadStatus(elementId);
  });
});



