const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)


/*
output: logs as expected

error: no. allOrders is global and valid in serveOrders.
           specialOrder is local in for-block but stays there.

undefined: nothing.

allOrders: global scope
specialOrder: local scope of for-block in serveOrders.

*/