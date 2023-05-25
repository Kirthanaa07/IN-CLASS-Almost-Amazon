// for merged promises
// TODO: Get data for viewBook
import { getSingleBook } from './bookData';
import { getAuthorBooks, getSingleAuthor } from './authorData';

const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // returns single book object
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleAuthor(firebaseKey).then((authorObject) => { // returns single author object
    getAuthorBooks(authorObject.firebaseKey) // we nest this promise so that we can use the author object
      .then((bookObjects) => resolve({ ...authorObject, bookObjects }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has author data and an object named bookObjects
});

export {
  getBookDetails,
  getAuthorDetails
};
