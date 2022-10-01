import axios from 'axios';

class ApiProducts {
  // static apiKey = process.env.VUE_APP_API_KEY
  static mainURL = 'https://fakestoreapi.com/products'
  // static nowPlayingMoviesURL = `${MoviesApi.mainURL}/now_playing?api_key=${MoviesApi.apiKey}`
  // static popularMovieURL = `${MoviesApi.mainURL}/popular?api_key=${MoviesApi.apiKey}`

  static getAllProducts() {
    return axios.get(`${ApiProducts.mainURL}?limit=10`).then((response) => response.data);
  }

  // static getPopularMovies (page = 1) {
  //   return axios.get(`${MoviesApi.popularMovieURL}&page=${page}`).then(response => response.data)
  // }
  //
  // static getDetailsOfMovie (id) {
  //   return axios.get(`${MoviesApi.mainURL}/${id}?api_key=${MoviesApi.apiKey}`)
  //   .then(response => response.data)
  // }
}

export default ApiProducts;

ApiProducts.getAllProducts();
