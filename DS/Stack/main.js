
// Stack 

// function Stack() {
//     this.data = new Array; // Or
    // array ? this.data = array : this.data = []; 
    // this.data = array ? array : []; 

//     this.push = function(value) {
//         if(this.data.length < 3){
//             this.data.push(value);
//         }
//     }

//     this.pop = function() {
//          this.data.pop();  
//     }

// }

// const array = new Stack();
// array.push("bob");
// array.push("bob");
// array.push("bob");
// array.push("bob");
// console.log(array.data);
























function Stack(){
    this.data = new Array;

    this.add = function(value){
        if(this.data.length < 30) this.data.push(value);  
    }

    this.remove = function(){
        this.data.pop();
    }
}

let info2 = new Stack();
info2.add("root")
info2.add("root")
info2.add("root")
info2.add("root")
info2.add("root")
info2.add("root")
info2.add("root")
info2.add("root")
info2.add("root")
info2.add("bob")
info2.add("root")
info2.add("root")
// info2.remove()
console.log(info2.data);

/*********************************************************************/




















