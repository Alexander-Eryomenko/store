import axios from 'axios';

class ApiProducts {
  static mainURL = 'https://fakestoreapi.com/products'

  static getAllProducts() {
    return axios.get(`${ApiProducts.mainURL}?limit=6`).then((response) => response.data);
  }
}

export default ApiProducts;
