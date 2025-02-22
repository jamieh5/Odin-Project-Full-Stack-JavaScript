// Task: https://www.theodinproject.com/lessons/node-path-javascript-library

const modal = document.querySelector('.addBookModal')
const addBook = document.querySelector('.addBook')

addBook.addEventListener('click', function () {
  modal.open = true
})

const myLibrary = []

function Book(name, author, pages, read) {
  this.name = name
  this.author = author
  this.pages = pages
  this.read = read
}

const atomicHabits = new Book('Atomic Habits', 'James Clear', 346, 'not read')

myLibrary.push(atomicHabits)
console.log(myLibrary)
