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

function Book(name, author, pages) {
  this.name = name
  this.author = author
  this.pages = pages
}

const submitBtn = document.querySelector('#submitModal')
submitBtn.addEventListener('click', function (event) {
  event.preventDefault()

  const title = document.querySelector('#name').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value

  const newBook = new Book(title, author, pages)
  myLibrary.push(newBook)
  console.log(myLibrary)
})

function addBookToLibrary(title, author, pages) {
  const bookContainer = document.querySelector('.container')
  const card = document.createElement('div')
  card.classList.add('book')
  bookContainer.append(card)

  const bookTitle = document.createElement('p')
  bookTitle.innerHTML = title
  bookTitle.classList.add('title')
  card.append(bookTitle)

  const bookAuthor = document.createElement('p')
  bookAuthor.innerHTML = `by: ${author}`
  bookTitle.classList.add('author')
  card.append(bookAuthor)

  const bookPages = document.createElement('p')
  bookPages.innerHTML = `Pages: ${pages}`
  bookTitle.classList.add('pages')
  card.append(bookPages)

  const notRead = document.createElement('button')
  notRead.innerHTML = 'Not Read'
  notRead.classList.add('read')
  card.append(notRead)

  const br = document.createElement('br')
  card.append(br)

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete')
  card.append(deleteBtn)

  const deleteBtnImg = document.createElement('img')
  deleteBtnImg.src = './assets/delete-icon.svg'
  deleteBtn.append(deleteBtnImg)
}

addBookToLibrary('Atomic Habits', 'James Clear', '342')
