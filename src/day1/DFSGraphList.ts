const walk = (
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    path: number[],
    seen: boolean[],
): boolean => {
    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;

    path.push(curr);
    if (curr === needle) {
        return true;
    }

    const edges = graph[curr];
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        if (walk(graph, edge.to, needle, path, seen)) {
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
    const seen: boolean[] = new Array(graph.length).fill(false);

    const gotIt = walk(graph, source, needle, path, seen);

    if (!gotIt) {
        return null;
    }

    return path;
}

