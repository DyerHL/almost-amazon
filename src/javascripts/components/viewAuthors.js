import clearDom from '../helpers/clearDom';

const viewAuthor = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
    <div class="d-flex flex-column">
       <div class="mt-5">
         <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
         <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
       </div>
     </div>
     <div class="text-white ms-5 details">
       <h5>${obj.first_name} ${obj.last_name}</h5>
       <div class="quotes-styles">
       <p>Quote: ${obj.quote || ''}</p>
     </div>
       <p>${obj.description || ''}</p>
       <hr>
       <p>${obj.email || ''}</p>    
       <hr>
       <p>Books written by this author:</p>
       <div class="mt-5 d-flex flex-wrap" id="authors-books"></div>  
      </div>

    </div>`;

  obj.book.forEach((book) => {
    document.querySelector('#authors-books').innerHTML += `
    <div class="authorsbooks-card" style="width: 150px;">
      <img class="card-img-top" src=${book.image} alt=${book.title} style="width: 150px;">
    </div>
        `;
  });
};

export default viewAuthor;
