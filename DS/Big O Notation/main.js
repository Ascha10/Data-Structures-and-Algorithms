// let addHiToString = (someString) => {
//    return someString + "Hi";
// }

// let text = "bob";

// console.log(addHiToString(text));

//************************************************/

//the Big O Notation of the function is  O(1);

//************************************************/

// let sumOfarray = (someArray) => {
//     let sum = 0;
//    for (const element of someArray) {
//         sum += element 
//    } 
//    return sum;
// }

// let myArray = [10,20,30,40,50];

// console.log(sumOfarray(myArray));

//************************************************/

//the Big O Notation of the function is  O(n);

//************************************************/

// let minNumber = (someArray) => {
//     return Math.min(...someArray)
// }

// let myArray = [10,20,30,40,50];

// console.log(minNumber(myArray));


//************************************************/

// let checkIfNumberExist = (someChar,someArray) => {
//     for (const element of someArray) {
//         if(someArray.indexOf(someChar) != -1){
//             return element
//         }
//         return false
//     }
// }

// let arrayOfNames = ["bob",20,"sid",40,50];

// console.log(checkIfNumberExist("bob",arrayOfNames));

//************************************************/

// let checkIfNumberExist = (someChar,someArray) => {
//     for (const element of someArray) {
//         if (someChar == element) {
//             return  element
//          } 
//          return false
//     }
// }

// let arrayOfNames = ["bob",20,"sid",40,50];

// console.log(checkIfNumberExist("bob",arrayOfNames));


// the best case senerio is O(1)
// the worst case senerio is O(n)
//************************************************/

//Bubble sort

// function sortItems(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = 0; j < array.length; j++) {
// 			if (array[j] > array[j + 1]) {
// 				let temp = array[j];
//                 console.log(temp);
// 				array[j] = array[j + 1];
// 				array[j + 1] = temp;
// 			}
// 		}
// 	}
//     return array;
// }

// let arrayOfNumber = [100,50,20,150,9,70,2]
// console.log(sortItems(arrayOfNumber));

//************************************************/

//Bubble sort (Optimized) 

// function optimizedBubbleSort(array) {
// 	for (let i = 0; i < array.length; i++) {
//         let swapped = false;
// 		for (let j = 0; j < array.length; j++) {
// 			if (array[j] > array[j + 1]) {
// 				let temp = array[j];
//                 console.log(temp);
// 				array[j] = array[j + 1];
// 				array[j + 1] = temp;

//                 swapped = true;
// 			}
// 		}

//         if (swapped == false) {
//            break 
//         }
// 	}
//     return array;
// }

// let arrayOfNumber = [100,50,20,150,9,70,2]
// console.log(optimizedBubbleSort(arrayOfNumber));

//************************************************/

//Mergh sort algorithem

//  function merge(left, right) {
//     let sortedArr = []; 
  
//     while (left.length && right.length) {
//       if (left[0] < right[0]) {
//         sortedArr.push(left.shift());
//       } else {
//         sortedArr.push(right.shift());
//       }
//     }
//       return [...sortedArr, ...left, ...right];
// }
  
  
//   function divider(arr) {
//     const half = Math.floor(arr.length / 2);
  
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     const left = arr.splice(0, half); 
//     const right = arr;
//     return merge(divider(left), divider(right));
//   }
  
// let arrayOfNumber = [100,50,20,150,9,70,2]
// console.log(divider(arrayOfNumber));
  
//************************************************/

// selection sort 

// function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let min = i;
 
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//       }
//     }
 
//     if (min != i) {
//       let temp = array[i];
//       array[i] = array[min];
//       array[min] = temp;
//     }
//   }
//   return array;
// }

// let arrayOfNumber = [100,50,20,150,9,70,2]
// console.log(selectionSort(arrayOfNumber));
//************************************************/

// shuffle Array

// let shuffleArray = someArray => {
//   for (let i = 0; i < someArray.length; i++) {
//     let j = Math.floor(Math.random() * (i + 1));
//     let temp = someArray[i];
//     someArray[i] = someArray[j];    
//     someArray[j] = temp;    
//   }
//   return someArray;
// }

// let arrayOfNumber = [100,50,20,150,9,70,2]
// console.log(shuffleArray(arrayOfNumber));
//************************************************/








