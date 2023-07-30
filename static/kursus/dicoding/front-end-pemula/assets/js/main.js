document.addEventListener('DOMContentLoaded', function() {

 const submitForm = document.getElementById('inputBook');
 const searchForm = document.getElementById('searchBook');

 submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookList();
  });

 searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    searchData();
  });

 if (isStorageExist()) {
    loadDataFromStorage();
  }

});

document.addEventListener('ondatasaved', () => {
  console.log('Data saved');
});

document.addEventListener('ondataloaded', () => {
  refreshDataFromBooks();
});