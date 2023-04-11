const clearDom = () => {
  document.querySelector('#order-cards').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view-details').innerHTML = '';
  document.querySelector('#rev-container').innerHTML = '';
  document.querySelector('#home-container').innerHTML = '';
};

export default clearDom;
