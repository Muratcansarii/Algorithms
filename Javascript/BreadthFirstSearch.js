import Queue from '../Data-Structures/Queue/Queue'


export function breadthFirstSearch(graph, startingNode) {
  // visited keeps track of all nodes visited
  const visited = new Set()

  // queue contains the nodes to be explored in the future
  const queue = new Queue()
  queue.enqueue(startingNode)

  while (!queue.isEmpty()) {
    // start with the queue's first node
    const node = queue.dequeue()

    if (!visited.has(node)) {
      // mark the node as visited
      visited.add(node)
      const neighbors = graph[node]

      // put all its neighbors into the queue
      for (let i = 0; i < neighbors.length; i++) {
        queue.enqueue(neighbors[i])
      }
    }
  }

  return visited
}
