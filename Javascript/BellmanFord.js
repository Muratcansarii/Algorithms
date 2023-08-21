
function BellmanFord(graph, V, E, src, dest) {
  // Initialize distance of all vertices as infinite.
  const dis = Array(V).fill(Infinity)
  // initialize distance of source as 0
  dis[src] = 0

  // Relax all edges |V| - 1 times. A simple
  // shortest path from src to any other
  // vertex can have at-most |V| - 1 edges
  for (let i = 0; i < V - 1; i++) {
    for (let j = 0; j < E; j++) {
      if (dis[graph[j][0]] + graph[j][2] < dis[graph[j][1]]) {
        dis[graph[j][1]] = dis[graph[j][0]] + graph[j][2]
      }
    }
  }
  // check for negative-weight cycles.
  for (let i = 0; i < E; i++) {
    const x = graph[i][0]
    const y = graph[i][1]
    const weight = graph[i][2]
    if (dis[x] !== Infinity && dis[x] + weight < dis[y]) {
      return null
    }
  }
  for (let i = 0; i < V; i++) {
    if (i === dest) return dis[i]
  }
}

export { BellmanFord }
