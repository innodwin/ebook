export async function getProductList(searchTerm){
    const url =  `${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`;
    const response = await fetch(url);
    if(!response.ok){
      throw {message:response.statusText,statusCode:response.status}; //eslint-disable-line
    }
    const json = await response.json();
    return json;
}

export async function getProduct(id){

    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    if(!response.ok){
        throw {message:response.statusText,statusCode:response.status};//eslint-disable-line 
      }
    const json = await response.json();
    return json;
}
export async function getFeaturedList(){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if(!response.ok){
        throw {message:response.statusText,statusCode:response.status}; //eslint-disable-line
      }
    const json = await response.json();
    return json;

}