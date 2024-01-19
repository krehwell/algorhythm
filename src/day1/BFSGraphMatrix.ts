import _default from "ts-jest";

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const prev = new Array(graph.length).fill(-1);
    const q = [source];

    do {
        const curr = q.shift() as number;

        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            if (prev[i] !== -1) {
                continue;
            }

            if (adjs[i] === 0) {
                continue;
            }

            q.push(i);
            prev[i] = curr;
        }
    } while (q.length);

    if (prev[needle] === -1) {
        return null;
    }

    const out: number[] = [];
    let curr = needle;

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    out.push(source);
    return out.reverse();
}
