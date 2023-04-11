import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showItems = (array) => {
  clearDom();
  console.warn('test', array);
  let domString = '';
  array.forEach((item) => {
    domString += `
      <div id="item-card" class="card mx-auto w-75 mb-3">
      <div class="card-body">
        <h5 class="card-title">Item Name: ${item.itemName}</h5>
        <h5 class="card-text">Price :$ ${item.price}.</p>
      </div>
      <div class="item-button">
        <button id="edit-item-btn--${item.firebaseKey}" class="btn btn-warning">Edit</button>
        <button id="delete-item-btn--${item.firebaseKey}" class="btn btn-warning">Delete</button>
      </div>
      </div>`;

    renderToDom('#order-cards', domString);
  });
};
export default showItems;
