// Task: https://www.theodinproject.com/lessons/node-path-javascript-library

const myLibrary = []

function Book(name, author, pages) {
  this.name = name
  this.author = author
  this.pages = pages
}

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

myLibrary.push(new Book('Atomic Habits', 'James Clear', '346'))
myLibrary.push(new Book('Atomic Habits', 'James Clear', '346'))
myLibrary.push(new Book('Atomic Habits', 'James Clear', '346'))

for (i = 0; i < myLibrary.length; i++) {
  addBookToLibrary(myLibrary[i].name, myLibrary[i].author, myLibrary[i].pages)
}
