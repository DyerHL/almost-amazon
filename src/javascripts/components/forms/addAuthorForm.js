import clearDom from '../../helpers/clearDom';

const addAuthorForm = (userId, obj = {}) => {
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
        <div class="form-group">
          <label for="quote">Quotes</label>
          <textarea class="form-control" placeholder="Favorite Quotes" id="quote" style="height: 100px">${obj.quote || ''}</textarea>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
          <label class="form-check-label" for="favorite">Is this a favorite author?</label>
        </div>
        <button type="submit" id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="btn btn-primary">Submit Author</button>
      </form>`;
};

export default addAuthorForm;
