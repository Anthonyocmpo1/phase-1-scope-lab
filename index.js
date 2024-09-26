window.customerName = 'bob';
window.bestCustomer
const leastFavoriteCustomer = 'not bob';
function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
  }
  function setBestCustomer() {
    window.bestCustomer = 'not bob';
  }
  function overwriteBestCustomer(newBestCustomer) {
    window.bestCustomer = newBestCustomer;
  }
  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'something else'; 
  }