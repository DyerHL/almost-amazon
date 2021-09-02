import { getSingleAuthor, getAuthorsBooks, deleteAuthor } from './authorData';
import { getSingleBook, deleteBook } from './bookData';

const viewBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ author: authorObject, ...bookObject });
        });
    }).catch(reject);
});

const viewAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey)
    .then((authorObject) => {
      getAuthorsBooks(authorObject.firebaseKey)
        .then((bookObject) => {
          resolve({ book: bookObject, ...authorObject });
        });
    }).catch(reject);
});

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getAuthorsBooks(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));
    Promise.all(deleteBooks).then(() => resolve(deleteAuthor(authorId)));
  }).catch(reject);
});

export { viewBookDetails, viewAuthorDetails, deleteAuthorBooks };
