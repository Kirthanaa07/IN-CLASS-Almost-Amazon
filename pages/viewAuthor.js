import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewBook = (obj = {}) => {
  clearDom();

  let domString = `
  <div class="mt-5 d-flex flex-column flex-wrap">
    <div class="text-white ms-5 details">
     <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
         
    </div>
    <div class="d-flex flex-row flex-wrap">`;

  obj.bookObjects.forEach((item) => {
    domString += `<div class="d-flex flex-column">
                    <img src=${item.image} alt=${item.title} style="width: 300px;">
                    <p>${item.description || ''}</p>
                    <hr>
                    <p>${item.favorite ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Favorite </span> 
                      $${item.price}` : `$${item.price}`}</p>
                  </div>`;
  });

  domString += '</div>';

  renderToDOM('#view', domString);
};

export default viewBook;
