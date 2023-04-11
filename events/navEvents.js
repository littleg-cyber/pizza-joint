import { getOrders } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import { showOrders } from '../pages/orders';

const navEvents = () => {
  // Show orders
  document.querySelector('#view-orders').addEventListener('click', () => {
    getOrders().then(showOrders);
  });

  // create orders
  document.querySelector('#create-order').addEventListener('click', () => {
    addOrderForm();
  });
};

export default navEvents;
