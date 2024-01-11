export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const prev = new Array(graph.length).fill(-1);

    const q = [source];

    do {
        const curr = q.shift();

        if (curr == undefined) {
            break;
        }

        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) {
                continue;
            }

            if (prev[i] !== -1) {
                continue;
            }

            prev[i] = curr;
            q.push(i);
        }
    } while (q.length);

    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    if (out.length) {
        return [source].concat(out.reverse());
    }

    return null;
}
