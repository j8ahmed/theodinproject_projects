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
const openModalBtn = document.querySelector('[data-target-modal]');
const closeModalBtn = document.querySelector('[data-close-modal-btn]');

let myLibrary = [
];

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

function openModal(modal){ modal.classList.add('active'); }
function closeModal(modal){ modal.classList.remove('active'); }

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

  // Close the form upon submission
  const modal = e.target.closest('#modal-cont');
  modal && closeModal(modal);

  // Reset the form
  e.target.reset();


})

openModalBtn.addEventListener('click', function(){
  const modal = document.querySelector(openModalBtn.dataset.targetModal);
  if(!modal) return

  openModal(modal)
  modal.addEventListener('click', function(e){ closeModal(e.target) })
})
closeModalBtn.addEventListener('click', function(){
  const modal = closeModalBtn.closest('#modal-cont');
  modal && closeModal(modal)
})

window.addEventListener('load', function(){
  testData.forEach(function(book){
    addBookToLibrary(book);
  })
})

/* --------------------------- */

/* -------- Test Data -------- */

const testData = [
  { id: 1, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', pages: 223, read: true, },
  { id: 2, title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling', pages: 342, read: true, },
  { id: 3, title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling', pages: 317, read: true, },
];
