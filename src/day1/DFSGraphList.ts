const walk = (
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    path: number[],
    prev: boolean[],
): boolean => {
    if (prev[curr]) {
        return false;
    }

    prev[curr] = true;

    path.push(curr);
    if (curr === needle) {
        return true;
    }

    const edges = graph[curr];
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        if (walk(graph, edge.to, needle, path, prev)) {
            return true;
        }
    }

    path.pop();

    return false;
};

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const path: number[] = [];
    const prev = new Array(graph.length).fill(false);

    const gotIt = walk(graph, source, needle, path, prev);

    if (gotIt) {
        return path;
    }

    return null;
}
