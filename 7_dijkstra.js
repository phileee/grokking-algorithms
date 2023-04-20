let graph = { "start": { "a": 6, "b": 2 }, "a": { "fin": 1 }, "b": { "a": 3, "fin": 5 }, "fin": {} };
let costs = { "a": 6, "b": 2, "fin": Infinity };
let parents = { "a": "start", "b": "start", "in": null };
let processed = [];

function findLowestCostNode(costs) {
    let lowestCost = Infinity;
    let lowestCostNode = null;
    for (let node in costs) {
        let cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

let node = findLowestCostNode(costs);
while(node) {
    let cost = costs[node];
    let neighbors = graph[node];
    for (let n of Object.keys(neighbors)) {
        let newCost = cost + neighbors[n];
        if (costs[n] > newCost) {
            costs[n] = newCost;
            parents[n] = node;
        }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
}

console.log(costs["fin"]) // 6