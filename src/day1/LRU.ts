type Node<V> = {
    val: V;
    next?: Node<V>;
    prev?: Node<V>;
};

function createNode<V>(value: V): Node<V> {
    return { val: value };
}

export default class LRU<K, V> {
    private length: number;
    private size: number;
    private head?: Node<V>;
    private tail?: Node<V>;
    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(size: number) {
        this.length = 0;
        this.size = size;
        this.head = undefined;
        this.tail = undefined;
        this.lookup = new Map();
        this.reverseLookup = new Map();
    }

    update(key: K, value: V): void {
        let node = this.lookup.get(key);
        if (!node) {
            node = createNode(value);
            this.prepend(node);
            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
            this.length++;
            this.trimCache();
        } else {
            this.detach(node);
            this.prepend(node);
            node.val = value;
        }
    }

    get(key: K): V | undefined {
        const node = this.lookup.get(key);

        if (!node) {
            return undefined;
        }

        this.detach(node);
        this.prepend(node);

        return node.val;
    }

    detach(node: Node<V>) {
        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node === this.head) {
            this.head = this.head.next;
        }

        if (node === this.tail) {
            this.tail = this.tail.prev;
        }

        node.next = undefined;
        node.prev = undefined;
    }

    prepend(node: Node<V>) {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    trimCache() {
        if (this.length <= this.size) {
            return;
        }

        const node = this.tail as Node<V>;
        const key = this.reverseLookup.get(node) as K;
        this.detach(node);
        this.reverseLookup.delete(node);
        this.lookup.delete(key);
        this.length--;
    }
}

