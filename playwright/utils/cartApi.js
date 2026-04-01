async function clearCart(request, baseURL) {
  await request.post(`${baseURL}/cart/clear.js`);
}

async function getCart(request, baseURL) {
  const response = await request.get(`${baseURL}/cart.js`);
  return response.json();
}

module.exports = {
  clearCart,
  getCart,
};
