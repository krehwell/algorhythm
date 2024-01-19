const hasUnvisited = (seen: boolean[], dists: number[]): boolean => {
    return seen.some((s, i) => !s && dists[i] < Infinity);
};

const getLowestUnvisited = (seen: boolean[], dists: number[]): number => {
    let idx = -1;
    let lowest = Infinity;

    for (let i = 0; i < dists.length; i++) {
        if (seen[i]) {
            continue;
        }

        let d = dists[i];

        if (d < lowest) {
            idx = i;
            lowest = d;
        }
    }

    return idx;
};

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists = new Array(arr.length).fill(Infinity);
    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists);

        seen[curr] = true;

        const adjs = arr[curr];
        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];
            const dist = dists[curr] + edge.weight;

            if (dist < dists[edge.to]) {
                prev[edge.to] = curr;
                dists[edge.to] = dist;
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
