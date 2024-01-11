export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const path: number[] = new Array(graph.length).fill(-1);
    const q = [source];

    do {
        const curr = q.shift() as number;

        if (curr === needle) {
            break;
        }

        const edges = graph[curr];
        for (let i = 0; i < edges.length; i++) {
            const edgeVal = edges[i];

            if (edgeVal === 0) {
                continue;
            }

            if (path.includes(i)) {
                continue;
            }

            path[i] = curr;
            q.push(i);
        }
    } while (q.length);

    let curr = needle;
    const out = [];

    while (path[curr] !== -1) {
        out.push(curr);
        curr = path[curr];
    }

    if (out.length) {
        return [source].concat(out.reverse());
    }

    return null;
}
