import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
      <form class="mb-4">
        <div class="form-group">
          <label for="title">Order Name</label>
          <input type="text" class="form-control" id="order-name" placeholder="Name" value="${obj.orderName || ''}" required>
        </div>
        <div class="form-group">
          <label for="text">Customer Phone</label>
          <input type="text" class="form-control" id="phone" placeholder="Phone Number" value="${obj.phone || ''}" required>
        </div>
        <div class="form-group">
        <label for="text">Customer Email</label>
        <input type="text" class="form-control" id="email" placeholder="Email" value="${obj.email || ''}" required>
        </div>
        <div class="mb-3">
        <label for="orderType-select-input" class="form-label">Order Type</label>
        <select id="orderType-select-input" class="form-select" aria-label="orderType select">
          <option selected>Select an Order Type</option>
          <option value="Call In">Call In</option>
          <option value="In Person">In Person</option>
        </select>
        </div>
        <button type="submit" id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="btn btn-warning">Submit Order</button>
      </form>`;

  renderToDom('#form-container', domString);
};

export default addOrderForm;
