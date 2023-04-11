import { deleteOrder, getSingleOrder } from './orderData';
import { deleteSingleItem, getOrderItems } from './itemData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObject) => {
    getOrderItems(orderObject.firebaseKey)
      .then((orderItemsArray) => resolve({ orderObject, orderItemsArray }, console.warn('test of get order details', orderObject, orderItemsArray)));
  }).catch(reject);
});

const deleteOrderItemRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(firebaseKey).then((orderItemArray) => {
    const deleteBookPromises = orderItemArray.map((item) => deleteSingleItem(item.firebaseKey));

    Promise.all(deleteBookPromises).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export {
  deleteOrderItemRelationship,
  getOrderDetails
};
