function processOrder(orderId) {
  return fetch(`/api/orders/${orderId}`)
    .then(response => response.json())
    .then(order => {
      return fetch(`/api/inventory/${order.productId}`);
    })
    .then(response => response.json())
    .then(inventory => {
      if (inventory.stock > 0) {
        return { success: true, message: 'Order processed' };
      } else {
        return { success: false, message: 'Out of stock' };
      }
    });
}

async function processOrder(orderId) {
    const response = fetch(`/api/orders/${orderId}`);
    const body = response.Json();

    const order = body.order;
    const response2 = fetch(`/api/inventory/${order.productId}`);
    
}