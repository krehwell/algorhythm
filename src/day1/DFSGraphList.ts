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

    if (path.includes(curr)) {
        return false;
    }

    path.push(curr);

    if (curr === needle) {
        return true;
    }


    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; i++) {
        const edge = adjs[i];
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
    const seen = new Array(graph.length).fill(false);

    if (walk(graph, source, needle, path, seen)) {
        return path;
    }

    return null;
}
