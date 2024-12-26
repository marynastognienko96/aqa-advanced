function handleNum(num, callback1, callback2){
    if (num % 2) {
        callback2();
    } else {
        callback1();
    }
}

function handleOdd() {
    console.log("number is odd");
}

function handleEven() {
    console.log("number is even")
}

handleNum(4, handleEven, handleOdd);

