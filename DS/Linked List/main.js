class CreateNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }

}

let nextBtn = document.getElementById("nextBtn");
let displayPics = document.getElementById("displayPics");

class LinkedList {
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(data){

        const newNode = new CreateNode (data)
          
       if(this.head == null){ 
            this.head = newNode;
            this.tail = newNode;
       }else {
           newNode.next = this.head;
           this.head = newNode;
       } 
       this.length++; 
    }

    addToEnd(data){

        const newNode = new CreateNode (data)

       if(this.head == null){ 
            this.head = newNode;
            this.tail = newNode;
       }else {
           this.tail.next = newNode;
           this.tail = newNode; 
       } 
       this.length++;
    }

    printList(){
        let data = " ";
        let current = this.head;
        while(current != null){
            data += current.data + " "; 
            current = current.next;
        }
        return data;
    }

    removeFirstNode(){
        if (!this.head) return null;

        let data = this.head.data;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
          this.head = this.head.next; 
        }
        this.length--; 
        return data     
    }

    removeLastNode(){
        if (!this.head) return null;

        let data = this.tail.data;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
          let current = this.head; 
          while (current.next.next != null) {
              current = current.next;
              current.next = null;
              this.tail = current;
          }
        }
        this.length--; 
        return data  
    }

    insertAtPosition(position,data){
        if (position < 0 || position > this.length) return null;

        if (position === 0) {
            this.addToHead(data);

        }else if(position === this.length){
            this.addToEnd(data);
        }else{
            let newNode = new CreateNode(data); 
            let previousNode = null;
            let current = this.head;
            let counter = 0;
            while (counter < position) {
               previousNode = current;
               current = current.next;
               counter++; 
            }

            newNode.next = current;
            previousNode.next = newNode;
            this.length++;
        }       
    }

    removeAtPosition(position){
        if (position < 0 || position >= this.length) return null;

        if(position === 0) {
           return this.removeFirstNode();

        }else if(position === this.length -1){
            return this.removeLastNode();

        }else{
            let previousNode = null;
            let current = this.head;
            let counter = 0;
            while (counter < position) {
                previousNode = current;
                current = current.next;
                counter++;
            }
            previousNode.next = current.next;
            this.length--;
            return current.data;
        }
    }

}

const list = new LinkedList();
console.log(list);
list.addToHead("https://cdn.pixabay.com/photo/2020/06/03/03/33/flower-5253311__480.jpg");
list.addToHead("https://cdn.pixabay.com/photo/2020/07/30/10/26/asian-woman-5450041__480.jpg");
list.addToHead("https://cdn.pixabay.com/photo/2020/04/16/06/06/water-5049286__480.jpg");
console.log(list);

/****************/
list.addToEnd("https://cdn.pixabay.com/photo/2018/11/11/19/46/drip-3809546__480.jpg");
list.addToEnd("https://cdn.pixabay.com/photo/2021/08/23/21/12/duckling-6568845__480.jpg");
list.addToEnd("https://cdn.pixabay.com/photo/2020/04/28/18/18/bee-5105751__480.jpg");
console.log(list);

console.log(list.printList());
// console.log(list.removeFirstNode());
/************************************************************/

displayPics.src = list.head.data;
let current = list.head;

nextBtn.addEventListener("click",() => {

    if(list.head.next){
        list.head = list.head.next;
        displayPics.src = list.head.data;

    }else{
        list.head = current;
        displayPics.src = list.head.data;
    }
})

/************************************************************/
