import { showOrders } from '../pages/orders';
import { getClosedOrders, getOrders, getSingleOrder } from '../api/orderData';
import { deleteSingleItem, getOrderItems, getSingleItem } from '../api/itemData';
import closeOrderForm from '../components/forms/closeOrderForm';
import addOrderForm from '../components/forms/addOrderForm';
import { deleteOrderItemRelationship, getOrderDetails } from '../api/meregedData';
import viewOrderDetails from '../pages/viewOrderDetails';
import { editItemForm } from '../components/forms/addItemForm';
import revPage from '../pages/revPage';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrderItemRelationship(firebaseKey).then(() => {
          getOrders().then(showOrders);
        });
      }
    }
    // CLICK EVENT FOR SHOWING FORM FOR CLOSING ORDER
    if (e.target.id.includes('payment-btn')) {
      console.warn('clicked closed order');

      if (e.target.id.split('--')) {
        const [, firebaseKey] = e.target.id.split('--');

        getSingleOrder(firebaseKey).then((obj) => closeOrderForm(obj));
      }
    }

    // click event for editing item
    if (e.target.id.includes('edit-item-btn')) {
      console.warn('EDIT ITEM', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('this is the firebaseKey', firebaseKey);
      getSingleItem(firebaseKey).then((itemObj) => editItemForm(itemObj));
    }

    // click event for editing order
    if (e.target.id.includes('edit-order-btn')) {
      console.warn('EDIT order', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
    }

    // click event to show orders on Dom
    if (e.target.id.includes('viewOrder-btn')) {
      console.warn('clicked view order');
      getOrders().then(showOrders);
    }

    // click event to show order form
    if (e.target.id.includes('createOrder-btn')) {
      console.warn('ADD ORDER');
      addOrderForm();
    }

    // click event to show order details
    if (e.target.id.includes('view-order-details-btn')) {
      console.warn('clicked view details');
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then(viewOrderDetails);
    }

    if (e.target.id.includes('delete-item-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ITEM', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleItem(firebaseKey).then(() => {
          getOrderItems().then(viewOrderDetails);
        });
      }
    }

    if (e.target.id.includes('viewRev-btn')) {
      console.warn('clicked view Rev');
      getClosedOrders().then((obj) => (revPage(obj)));
    }
  });
};
export default domEvents;
