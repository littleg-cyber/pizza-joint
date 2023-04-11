import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addItemForm = (orderFirebaseKey) => {
  clearDom();
  const domString = `
    <form class="mb-4">
      <div class="form-group">
        <label for="title">Item Name</label>
        <input type="text" class="form-control" id="itemName" aria-describedby="itemName" placeholder="" required>
      </div>
      <div class="form-group">
        <label for="item-price">Item Price</label>
        <input type="text" class="form-control" id="price" required>
      </div>  
      <button type="submit" id="submit-item--${orderFirebaseKey}" class="btn btn-warning mt-4">Add/Edit Item</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

const editItemForm = (obj = {}) => {
  clearDom();
  console.warn('this is the edit item obj', obj);
  const domString = `
    <form class="mb-4">
      <div class="form-group">
        <label for="title">Item Name</label>
        <input type="text" class="form-control" id="itemName" aria-describedby="itemName" placeholder="" value="${obj.itemName || ''}" required>
      </div>
      <div class="form-group">
        <label for="item-price">Item Price</label>
        <input type="text" class="form-control" id="price" value="${obj.price || ''}" required>
      </div>  
      <button type="submit" id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="btn btn-warning mt-4">Add/Edit Item</button>
    </form>`;

  renderToDOM('#form-container', domString);
};
export {
  addItemForm,
  editItemForm,
};
