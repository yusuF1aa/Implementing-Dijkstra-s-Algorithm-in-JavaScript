function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const queue = [];

    // Initialize distances
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    queue.push({ node: start, distance: 0 });

    while (queue.length > 0) {
        queue.sort((a, b) => a.distance - b.distance);
        const { node, distance } = queue.shift();

        if (visited.has(node)) continue;
        visited.add(node);

        for (let neighbor in graph[node]) {
            const newDistance = distance + graph[node][neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                queue.push({ node: neighbor, distance: newDistance });
            }
        }
    }

    return distances;
}

// Example graph
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

// Finding shortest distances from 'A'
console.log(dijkstra(graph, 'A'));
