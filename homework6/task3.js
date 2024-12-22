function checkOrder (availible, ordered) {
    if (availible < ordered) {
        console.log('Your order is too large, we dont have enough goods.')
        return;
    } else if (ordered === 0) {
        console.log('Your order is empty')
        return;
    } else {
        console.log('Your order is accepted')
    }
}

const myOrder = checkOrder(3, 3)
console.log(myOrder)