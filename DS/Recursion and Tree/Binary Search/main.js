let binarySearch = (someArray,someNumber) => {
    
    if (someArray.length === 0) return false;
    
    let divide = Math.floor(someArray.length/2)
    console.log({divide});
    let leftArray = someArray.slice(0,divide);
    console.log({leftArray});
    let rightArray = someArray.slice(divide);
    console.log({rightArray});

    if (someNumber === leftArray[leftArray.length -1] || rightArray[0] === someNumber) return true;

    if (leftArray[leftArray.length-1] > someNumber) return binarySearch(rightArray,someNumber)
    
    else return  binarySearch(leftArray,someNumber)
} 

let arrayOfNumber = [10,20,30,40,50,60]
console.log(binarySearch(arrayOfNumber,30));
