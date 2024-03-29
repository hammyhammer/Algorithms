// Building an undirected Graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    )

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    )


  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacentList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    let potato = this.adjacencyList

      (function dfs(vertex) {
        if (!vertex) return null
        visited[vertex] = true
        result.push(vertex)
        potato[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            return dfs(neighbor)
          }
        })
      })(start)
    return result

  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      console.log(stack)
      currentVertex = stack.pop();
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result
  }

  breadthFirst(start) {
    let queue = [start]
    let result = []
    let visited = {}
    let currentVertex;
    visited[start] = true

    while (queue.length) {
      currentVertex = queue.shift
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }
    return result

  }
}

let graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")

// console.log(graph)
// console.log(graph.depthFirstRecursive("A"))
console.log(graph.depthFirstIterative("A"))