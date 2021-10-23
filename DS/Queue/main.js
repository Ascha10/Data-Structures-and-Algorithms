//Queue 

function Queue(){
    this.data = new Array;

    this.Enqueue = (value) => {
       return this.data.unshift(value);
    }

    this.Dequeue = () => {
      return  this.data.pop();
    }
}

let info1 = new Queue();
info1.Enqueue("bob");
info1.Enqueue("kali");
info1.Enqueue("jhob");
info1.Enqueue("sid");
// info1.Dequeue();
console.log(info1.data);


/*********************************************************************************/
let addNameInput = document.getElementById("inputName");
let addBtn = document.getElementById("addBtn");
let display = document.getElementById("display");

addBtn.addEventListener("click",() => {
    info1.Enqueue(addNameInput.value);
    console.log(info1.data);
})
   
setInterval(() => {
    info1.data.length > 0 ? display.innerText = info1.Dequeue() : "No People In The Array" ;
},2000)






