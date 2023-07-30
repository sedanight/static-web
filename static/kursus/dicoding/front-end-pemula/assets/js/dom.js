const composeData = (title, author, year, isFinished) => {
  return {
    id: +new Date(),
    title,
    author,
    year,
    isFinished,
  };
};

const isStorageExist = () => {
  if (typeof Storage === undefined) {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
};

const saveData = () => {
  const parsed = JSON.stringify(books);
  localStorage.setItem(BOOKSHELF_KEY, parsed);
  document.dispatchEvent(new Event('ondatasaved'));
};

const loadDataFromStorage = () => {
  const serializedData = localStorage.getItem(BOOKSHELF_KEY);

  let data = JSON.parse(serializedData);

  if (data !== null) books = data;

  document.dispatchEvent(new Event('ondataloaded'));
};

const updateDataToStorage = () => {
  if (isStorageExist()) saveData();
};

const findBook = (bookId) => {
  for (book of books) {
    if (book.id === bookId) return book;
  }
  return null;
};

const findBookIndex = (bookId) => {
  let index = 0;
  for (book of books) {
    if (book.id === bookId) return index;

    index++;
  }

  return -1;
};

const COMPLETED_BOOKS_ID = 'completed-books';
const UNCOMPLETE_BOOKS_ID = 'uncomplete-books';
const SEARCH_FIELD_ID = 'searchBookTitle';
const TITLE_FIELD_ID = 'inputBookTitle';
const AUTHOR_FIELD_ID = 'inputBookAuthor';
const YEAR_FIELD_ID = 'inputBookYear';
const IS_FINISEHD_ID = 'inputBookIsComplete';
const SUBMIT_BUTTON_ID = 'bookSubmit';
const BOOKSHELF_KEY = 'bookshelf';
const BOOK_ID = 'bookID';
let books = [];
const BTN_ATTRIBUTES = [
  {
    type: 'markCompleted',
    class: 'btn-mark-as-read',
    title: 'Mark as Read',
    icon: '<i class="fas fa-bookmark"></i>',
  },
  {
    type: 'markUncomplete',
    class: 'btn-mark-as-read',
    title: 'Mark as Read',
    icon: '<i class="far fa-bookmark"></i>',
  },
  {
    type: 'delete',
    class: 'btn-delete',
    title: 'Delete Book',
    icon: '<i class="fas fa-trash"></i>',
  },
];

const addBookList = () => {
  const completedBooksContainer = document.getElementById(COMPLETED_BOOKS_ID);
  const uncompleteBooksContainer = document.getElementById(UNCOMPLETE_BOOKS_ID);

  const title = document.getElementById(TITLE_FIELD_ID).value;
  const author = document.getElementById(AUTHOR_FIELD_ID).value;
  const year = document.getElementById(YEAR_FIELD_ID).value;
  const isFinished = document.getElementById(IS_FINISEHD_ID).checked;

  const composedData = composeData(title, author, year, isFinished);
  const book = makeBookList(composedData);

  if (isFinished) {
    completedBooksContainer.append(book);
  } else {
    uncompleteBooksContainer.append(book);
  }

  books.push(composedData);

  updateDataToStorage();
};

const makeBookList = ({ id, title, author, year, isFinished }) => {
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('book');
  bookContainer.setAttribute('id', id);

  const imageBook = document.createElement('img');
  imageBook.setAttribute('src', './assets/img/book.jpg');

  const yearBook = document.createElement('div');
  yearBook.classList.add('year');
  yearBook.innerText = year;

  const titleBook = document.createElement('h1');
  titleBook.innerText = title;

  const authorBook = document.createElement('p');
  authorBook.innerText = `Author : ${author}`;

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons');

  BTN_ATTRIBUTES.forEach((btn) => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add(btn.class);
    button.setAttribute('title', btn.title);

    if (btn.type === 'markCompleted' || btn.type === 'markUncomplete') {
      button.innerHTML = btn.icon;
      if (isFinished) {
        bookContainer.classList.add('completed');
        if (btn.type === 'markUncomplete') {
          button.setAttribute('id', 'uncompleteButton');
          button.style.display = 'none';
        } else {
          button.setAttribute('id', 'completedButton');
        }
      } else {
        bookContainer.classList.add('uncomplete');
        button.setAttribute('id', 'completedButton');
        if (btn.type === 'markCompleted') {
          button.style.display = 'none';
        } else {
          button.setAttribute('id', 'uncompleteButton');
        }
      }
    } else {
      button.innerHTML = btn.icon;
    }

    button.addEventListener('click', function (event) {
      buttonActions(btn.type, id, button);
    });

    buttonsContainer.append(button);
  });

  bookContainer.append(imageBook, titleBook, authorBook, yearBook, buttonsContainer);
  return bookContainer;
};

const buttonActions = (type, id, button) => {
  switch (type) {
    case 'markCompleted':
      changeMarking(id, button, 'completed');
      break;
    case 'markUncomplete':
      changeMarking(id, button, 'uncomplete');
      break;
    case 'delete':
      const confirm = window.confirm('Are you sure want to delete this data?');
      if (confirm) removeBookList(id);
      break;
  }
};

const changeMarking = (id, button, status) => {
  const bookData = findBook(id);

  const completedBooksContainer = document.getElementById(COMPLETED_BOOKS_ID);
  const uncompleteBooksContainer = document.getElementById(UNCOMPLETE_BOOKS_ID);

  const parentElement = document.getElementById(id);
  const parentElementClasses = parentElement.className.split(' ');

  if (status === 'completed') {
    const child = parentElement.querySelector(`.buttons #uncompleteButton`);
    child.style.display = '';
    bookData.isFinished = false;
  } else {
    const child = parentElement.querySelector(`.buttons #completedButton`);
    child.style.display = '';
    bookData.isFinished = true;
  }

  button.style.display = 'none';

  parentElementClasses.forEach((parentClass) => {
    if (parentClass === 'completed') {
      uncompleteBooksContainer.append(parentElement);
      parentElement.classList.remove('completed');
      parentElement.classList.add('uncomplete');
    } else if (parentClass === 'uncomplete') {
      completedBooksContainer.append(parentElement);
      parentElement.classList.remove('uncomplete');
      parentElement.classList.add('completed');
    }
  });

  updateDataToStorage();
};

const removeBookList = (id) => {
  const bookPosition = findBookIndex(id);
  books.splice(bookPosition, 1);

  const parentElement = document.getElementById(id);
  parentElement.remove();

  updateDataToStorage();
};




const searchData = () => {
  const completedBooksContainer = document.getElementById(COMPLETED_BOOKS_ID);
  const uncompleteBooksContainer = document.getElementById(UNCOMPLETE_BOOKS_ID);
  const keyword = document.getElementById(SEARCH_FIELD_ID).value;

  completedBooksContainer.innerHTML = '';
  uncompleteBooksContainer.innerHTML = '';

  const filteredData = books.filter((book) => book.title.toLowerCase().includes(keyword.toLowerCase()));
  filteredData.forEach((data) => {
    let composedData = {
      id: data.id,
      title: data.title,
      author: data.author,
      year: data.year,
      isFinished: data.isFinished,
    };
    const bookContainer = makeBookList(composedData);

    if (data.isFinished) {
      completedBooksContainer.append(bookContainer);
    } else {
      uncompleteBooksContainer.append(bookContainer);
    }
  });

  document.getElementById(SEARCH_FIELD_ID).value = '';
};

const refreshDataFromBooks = () => {
  const completedBooksContainer = document.getElementById(COMPLETED_BOOKS_ID);
  const uncompleteBooksContainer = document.getElementById(UNCOMPLETE_BOOKS_ID);

  for (book of books) {
    let composedData = {
      id: book.id,
      title: book.title,
      author: book.author,
      year: book.year,
      isFinished: book.isFinished,
    };
    const bookContainer = makeBookList(composedData);

    if (book.isFinished) {
      completedBooksContainer.append(bookContainer);
    } else {
      uncompleteBooksContainer.append(bookContainer);
    }
  }
};