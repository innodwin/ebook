function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return {token : token,id:cbid};
}
export async function getUser() {
 const {token:token, id :cbid} = getSession();
  const requestOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${cbid}`,
    requestOption
  );
  if(!response.ok){
    throw {message:response.statusText,statusCode:response.status}; //eslint-disable-line
  }
  const data = await response.json();

  return data;
}

export async function getUserOrder() {
    const {token:token, id :cbid} = getSession();
    var response = null;
     try {
      response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`,{
        method: "GET",
        headers: { "Content-Type":"application/json",
        Authorization: `Bearer ${token}` }
    });
     } catch (error) {
      
     }
    if(!response.ok){
      throw {message:response.statusText,statusCode:response.status}; //eslint-disable-line
    }
    const dataResponse = await response.json();
    return dataResponse;
}
export async function createOrder(cartList,total,user) {
  const orderDetails = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  var  dataResponse = null;
  const {token:token, id :cbid} = getSession();
  try {
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderDetails),
    });
    if(!response.ok){
      throw {message:response.statusText,statusCode:response.status}; //eslint-disable-line
    }
     dataResponse = await response.json();
  } catch (error) {
    return null;
  }
  return dataResponse;
}
