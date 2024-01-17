const hasUnvisited = (seen: boolean[], dists: number[]) => {
    return seen.some((s, i) => !s && dists[i] < Infinity);
};

const getLowestsUnvisited = (seen: boolean[], dists: number[]) => {
    let idx = -1;
    let lowest = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }

        const curr = dists[i];
        if (curr < lowest) {
            lowest = curr;
            idx = i;
        }
    }

    return idx;
};

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen = new Array(arr.length).fill(false);
    const dists = new Array(arr.length).fill(Infinity);
    const prev = new Array(arr.length).fill(-1);
    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestsUnvisited(seen, dists);

        seen[curr] = true;

        const adjs = arr[curr];
        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];

            if (seen[edge.to]) {
                continue;
            }

            const dist = curr + edge.weight;
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = curr;
            }
        }
    }

    const out: number[] = [];
    let curr = sink;
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    out.push(source);
    return out.reverse();
}
