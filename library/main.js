/* 
 * Code Outline:
 * 
 * - myLibrary               (Array)
 * - Book                    (constructor)
 * - addBookToLibrary        (function)
 * - constructBookElement    (function)
 * - displayBooks            (function)
 *   
  */


const addBookform = document.querySelector('#new-book-form');

let myLibrary = [];

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  const element = constructBookElement(book);
  myLibrary.push({element, ...book})
  displayBooks();
}

function constructBookElement(book){
  const bookElement = document.createElement('tr');
  bookElement.classList.add('book-item');

  Object.keys(book).map(function(key){
    const element = document.createElement('td');
    if(key === 'read')
      element.innerHTML = book[key] ? 'Yes' : 'No';
    else
      element.innerHTML = book[key];

    bookElement.appendChild(element);
  })

  return bookElement;
}

function displayBooks(library = myLibrary){
  const booksCont = document.getElementById('books-cont');

  library.map(book => {
    booksCont.appendChild(book.element);
  })
}

/* ----- Event Listeners ----- */

addBookform.addEventListener('submit', function(e){
  e.preventDefault();

  const newBook = {};
  const data = new FormData(e.target);

  for(let [key, value] of data.entries()){
    if(key === 'read'){
      value = value === 'true' ? true : false;
    }
    newBook[key] = value;
  }

  addBookToLibrary(new Book(
    1+myLibrary.length,
    newBook.title,
    newBook.author,
    newBook.pages,
    newBook.read
  ));

})



/* --------------------------- */

/* Test Data */


const testBook = {
  id: 1,
  title: 'Test Book',
  author: 'Jamal Ahmed',
  pages: 50,
  read: true,
};
