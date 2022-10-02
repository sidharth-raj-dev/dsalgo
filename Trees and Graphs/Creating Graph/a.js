class Graph {
    constructor() {
        this.edges = {};
        this.nodes = [];
    }

    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = [];
    }

    addEdge(node1, node2) {
        this.edges[node1].push(node2);
        this.edges[node2].push(node1);
    }

    print() {
        let graph = ""; this.nodes.forEach(node => {
            graph += node + "->" + this.edges[node].join(", ") + "\n";
        });
        console.log(graph);
    }
}

const graphRef = new Graph();

graphRef.addNode("A");
graphRef.addNode("B");
graphRef.addNode("C");
graphRef.addNode("D");
graphRef.addNode("E");

graphRef.addEdge("A", "C");
graphRef.addEdge("A", "B");
graphRef.addEdge("D", "E");

graphRef.print();