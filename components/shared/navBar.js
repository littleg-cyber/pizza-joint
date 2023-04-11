import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <img class="navbar-brand title" src="https://github.com/NSS-Evening-E22/pos-system-top-tune/raw/main/instructions/hhpw-record.png" alt="" height="100"></image>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="view-orders">
                View Orders<span class="sr-only">
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="create-order">Create Order</a>
            </li>
            <li>
            <input
            class="form-control mr-sm-1"
            id="search"
            placeholder="Search Orders"
            aria-label="Search"
            />
            </li>
          </ul>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
