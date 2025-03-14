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

  let read = false
  notRead.addEventListener('click', function () {
    if (read == false) {
      notRead.innerHTML = 'Read'
      read = true
    } else if (read == true) {
      notRead.innerHTML = 'Not Read'
      read = false
    }
  })
}

myLibrary.push(new Book('Atomic Habits', 'James Clear', '346'))
myLibrary.push(new Book('surronded by idiots', 'thomas erikson', '249'))
myLibrary.push(new Book('Why Nations Fail', 'James A. Robinson', '495'))
myLibrary.push(new Book('The Mountain is you', 'Brianna West', '495'))
myLibrary.push(new Book('Never Split the difference', 'Chris Voss', '223'))
myLibrary.push(new Book('Unfuck Yourself', 'Gary John Bishop', '182'))
myLibrary.push(new Book('Make your Bed', 'William H. McRAVEN', '122'))

for (i = 0; i < myLibrary.length; i++) {
  addBookToLibrary(myLibrary[i].name, myLibrary[i].author, myLibrary[i].pages)
}
