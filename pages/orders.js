import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1> No Orders </h1>';
  renderToDom('#order-cards', domString);
};

const showOrders = (array) => {
  clearDom();
  console.warn('test', array);
  let domString = '';
  array.forEach((order) => {
    domString += `
      <div class="card" id="order-card">
        <div class="card-body">
          <h2 class="card-title">${order.orderName}</h2>
          <br>
          <p class="card-status">Order Status: ${order.orderStatus}</p>
          <br>
          <p class="card-number">Phone Number: ${order.phone}</p>
          <br> 
          <p class="card-email">Email: ${order.email}</p>
          <br>
          <p class="card-type">Order Type: ${order.orderType}</p>
        </div>
          <div id="cards-btn">
            <button class="btn btn-outline-warning" id="view-order-details-btn--${order.firebaseKey}">Details</button>
            <button class="btn btn-warning" id="edit-order-btn--${order.firebaseKey}">Edit</button>
            <button class="btn btn-warning" id="delete-order-btn--${order.firebaseKey}">Delete</button>
          </div>
      </div>`;
  });
  renderToDom('#order-cards', domString);
};

export { showOrders, emptyOrders };
