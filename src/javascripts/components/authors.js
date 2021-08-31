import clearDom from '../helpers/clearDom';

const showAuthors = (array) => {
  clearDom();

  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <h6 class="card-subtitle mb-2 text-muted" id="email">${item.email}</h6>
      <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
      <button type="button" class="btn btn-info" id="edit-author--${item.firebaseKey}">Edit</button>
      <button type="button" class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete</button>
    </div>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
