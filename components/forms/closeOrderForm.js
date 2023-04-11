import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// THIS IS HTML FOR CLOSE ORDER FORM - THE CLOSE ORDER EVENT WILL ADJUST THE OBJECT IN DB
const closeOrderForm = (obj) => {
  clearDom();
  const domString = `
    <form class="mb-4 mx-auto w-75">
      <div class="mb-3">
        <label for="paymentType-select-input" class="form-label">Payment Type</label>
        <select id="paymentType-input" class="form-select" aria-label="paymentType select">
          <option selected>Select Payment Type</option>
          <option value="Cash"}">Cash</option>
          <option value="Credit"}">Credit Card</option>
          <option value="Mobile"}">Mobile</option>
        </select>
      </div>
      <div class="form-group">
        <label for="tip-amt">Tip Amount</label>
        <input type="text" class="form-control" id="tip-amt" placeholder="$0.00" required>
      </div>  
      <button type="submit" id="${obj.firebaseKey ? `close-order--${obj.firebaseKey}` : 'close-order'}" class="btn btn-warning mt-4">Close Order</button>
    </form>`;

  renderToDOM('#view-details', domString);
};

export default closeOrderForm;
