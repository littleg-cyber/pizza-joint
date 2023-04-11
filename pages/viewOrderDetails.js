// page to show item cards and total price plus add new item buttons and go to payment
import { getSingleOrder, updateOrder } from '../api/orderData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import showItems from './items';

const viewOrderDetails = (obj) => {
  clearDom();
  console.warn('this is the items object', obj);
  // console.warn('test key', obj.orderObject.firebaseKey);
  const arr = [];
  const key = obj.orderObject.firebaseKey;

  obj.orderItemsArray.forEach((item) => arr.push(item.price));

  // console.warn('this is the arr', arr);
  function sum() {
    if (arr.length === 0) {
      return 0;
    }
    return arr.reduce((a, b) => a + b);
  }

  const payload = {
    price: sum(),
    firebaseKey: key
  };
  console.warn('payload', payload);
  getSingleOrder(key).then(updateOrder(payload));
  // console.warn('Single Order', order));

  const totalString = `
  <div class="text-white details">
  <h4 style= "margin-bottom:50px" id="orderTotal">Total:${sum()} </h4>
  </div>`;

  const btnString = `<button class="btn btn-warning btn-lg mx-4" id="add-item-btn--${obj.orderObject.firebaseKey}">Add Item</button><button class="btn btn-warning btn-lg mx-2" id="payment-btn--${obj.orderObject.firebaseKey}">Go To Payment</button>`;

  if (obj.orderObject.orderStatus === false) {
    showItems(obj.orderItemsArray);
    renderToDOM('#view-details', btnString);
    renderToDOM('#form-container', totalString);
  } else {
    showItems(obj.orderItemsArray);
    renderToDOM('#form-container', totalString);
  }
};

export default viewOrderDetails;
