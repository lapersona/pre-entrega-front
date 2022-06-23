const axios = require( 'axios' );
const baseURL = 'https://ecommerce-coderh-backend.herokuapp.com';

const getProducts = async( productId = '' ) => {

  const apiUrl = `${ baseURL }/api/productos/${ productId }`;

  const results = await axios.get( apiUrl );
  const { data } = results;

  return data;

}

export default getProducts;