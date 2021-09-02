import { showBooks } from '../components/books';
import signOut from '../helpers/auth/signOut';
import { getAuthors, filterAuthors } from '../helpers/data/authorData';
import { booksOnSale, getBooks, searchBooks } from '../helpers/data/bookData';
import { showAuthors } from '../components/authors';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then((booksArray) => showBooks(booksArray));
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then((booksArray) => showBooks(booksArray));
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value;
    console.warn(searchValue);
    if (e.keyCode === 13) {
      searchBooks().then(showBooks);
      document.querySelector('#search').value = '';
    }
  });

  // AUTHORS
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then(showAuthors);
    document.querySelector('#form-container').innerHTML = '';
  });

  // FILTER AUTHORS
  document.querySelector('#fav-authors').addEventListener('click', () => {
    filterAuthors().then((authorsArray) => showAuthors(authorsArray));
  });
};

export default navigationEvents;
