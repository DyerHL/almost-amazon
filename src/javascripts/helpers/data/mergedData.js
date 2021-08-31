import { getSingleAuthor, getAuthorsBooks } from './authorData';
import { getSingleBook } from './bookData';

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

export { viewBookDetails, viewAuthorDetails };
