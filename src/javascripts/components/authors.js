import clearDom from '../helpers/clearDom';

const showAuthors = (array) => {
  clearDom();

  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <h6 class="card-subtitle mb-2 text-muted" id="email">${item.email}</h6>
      <hr>
      <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
      <button type="button" class="btn btn-info" id="edit-author--${item.firebaseKey}">Edit</button>
      <button type="button" class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete</button>
      <hr>
      <p class="card-text bold">${item.favorite ? `<span class="badge badge-info sale-badge"><i class="far fa-heart" aria-hidden="true">
      </i> </span> Favorite` : ''}</p>
    </div>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
