import { getOrders, updateOrder, createOrder } from '../api/orderData';
import { showOrders } from '../pages/orders';

const addOrderFormEvents = () => {
  document.querySelector('#form-container').addEventListener('click', (e) => {
    e.preventDefault();
    // ADD ORDER
    if (e.target.id.includes('submit-order')) {
      console.warn('clicked');
      const payload = {
        orderName: document.querySelector('#order-name').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType-select-input').value,
        price: 0,
        orderStatus: false,
        timestamp: new Date(Date.now()).toLocaleString()
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }

    // EVENT FOR UPDATING ORDER
    if (e.target.id.includes('update-order')) {
      console.warn('update order');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        orderName: document.querySelector('#order-name').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType-select-input').value,
        price: 0,
        firebaseKey,
        timestamp: new Date(Date.now()).toLocaleString()
      };
      updateOrder(payload).then(() => {
        getOrders().then(showOrders);
      });
    }
  });
};

export default addOrderFormEvents;
