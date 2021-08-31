import clearDom from '../../helpers/clearDom';

const addAuthorForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
      <form id="submit-author-form" class="mb-4">
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input type="text" class="form-control" id="first_name" aria-describedby="firstname" placeholder="First Name" value="${obj.first_name || ''}"required>
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="url" class="form-control" id="last_name" placeholder="Last Name" value="${obj.last_name || ''}"required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Email" value="${obj.email || ''}"required>
        </div>
        <button type="submit" id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="btn btn-primary">Submit Author</button>
      </form>`;
};

export default addAuthorForm;
