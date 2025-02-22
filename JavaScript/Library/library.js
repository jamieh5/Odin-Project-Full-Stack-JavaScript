// Task: https://www.theodinproject.com/lessons/node-path-javascript-library

const modal = document.querySelector('.addBookModal')
const addBook = document.querySelector('.addBook')
const read = document.querySelector('.read')

let bookRead = false

read.addEventListener('click', function () {
  if (bookRead == false) {
    read.style.background = '#a7c957'
    read.innerHTML = 'Read'
    bookRead = true
  } else if (bookRead == true) {
    bookRead = false
    read.style.background = '#bc4749'
    read.innerHTML = 'Not Read'
  }
})

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

function createCard(book) {
  const card = document.createElement('div')
  const title = document.createElement('h3')
  const author = document.createElement('p')
  const pages = document.createElement('p')
  const hasRead = document.createElement('button')
  const deleteBtn = document.createElement('img')
}
