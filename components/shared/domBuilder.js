import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="rev-container"></div>
  <div id="main-container">
    <div id="home-container"></div>
    <div id="form-container"></div>
    <div id="order-cards"></div>
    <div id="view-details"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
