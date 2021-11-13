
class GraphList{

    constructor(){
      this.adjacentsList = {};  
    }

    addVertex(key){
        if(!this.adjacentsList[key]) this.adjacentsList[key] = [];
        else throw Error(`vertex ${key} exist in the graph`);
    }

    addEdge(vertexOne, vertexTwo) {

        if(this.adjacentsList[vertexOne].indexOf(vertexTwo) == -1 && this.adjacentsList[vertexTwo].indexOf(vertexOne) == -1){
            this.adjacentsList[vertexOne].push(vertexTwo);
            this.adjacentsList[vertexTwo].push(vertexOne);
        }
    }

    // removeEdge(vertexOne,vertexTwo){
    //    if(this.adjacentsList[vertexOne].indexOf(vertexTwo) != -1 && this.adjacentsList[vertexTwo].indexOf(vertexTwo)){
    //       this.adjacentsList[vertexOne].splice(this.adjacentsList[vertexOne].indexOf(vertexTwo),1);
    //       this.adjacentsList[vertexTwo].splice(this.adjacentsList[vertexTwo].indexOf(vertexOne),1);
    //    }
    // }

    // removeVertex(vertex){
    //     delete this.adjacentsList[vertex];

    //     let edges = this.adjacentsList[vertex];
    //     for (const edge of edges) {
    //          this.removeEdge(edge,vertex)
    //     }
    // }

    RemoveEdgeAndVertex(vertex){
        this.adjacentsList[vertex].forEach(connection => {
            this.adjacentsList[connection].splice(this.adjacentsList[connection].indexOf(vertex),1)
        });
        delete this.adjacentsList[vertex];       
    }
    
}

let graph = new GraphList();
graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addEdge("b","c");
graph.addEdge("a","b");
// graph.addEdge("a","b");
// graph.removeVertex("a");
// graph.removeEdge("a","b")
console.log(graph);

// graph.RemoveEdgeAndVertex("c")



