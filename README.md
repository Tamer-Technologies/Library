# My Kitten Library

A simple personal library management web application built with vanilla HTML, CSS, and JavaScript. This project demonstrates the use of Objects and Object Constructors in JavaScript.

## Features

- **Add Books**: Create new book entries with title, author, year, pages, and cover image
- **Book Management**: Remove books from your library
- **Read Status**: Toggle between "Read" and "Not Read" status for each book
- **Cover Images**: Upload custom book covers or use default placeholder
- **Grid Layout**: Display books in a responsive grid layout

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript

## How to Use

1. Open `index.html` in your web browser
2. Click "Add Book" to add a new book to your library
3. Fill in the book details and optionally upload a cover image
4. Use the toggle switch to mark books as read/unread
5. Click "Remove" to delete books from your library

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── media/
    └── book-covers/    # Default book cover images
```

## Notes

- The library data is stored in memory and will reset when the page is refreshed
- Responsive design was not a primary focus of this project
- Book covers are handled using file upload with preview functionality
