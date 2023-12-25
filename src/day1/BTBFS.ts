export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | null | undefined)[] = [head];

    while (q.length) {
        const curr = q.shift();

        if (curr?.value === needle) {
            return true;
        }

        if (!curr?.value) {
            continue;
        }

        q.push(curr?.left);
        q.push(curr?.right);
    }

    return false;
}
