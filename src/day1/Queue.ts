type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        const latestNode = this.tail as Node<T>;
        latestNode.next = newNode;
        this.tail = newNode;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = head.next;
        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    peek(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        return this.head.value;
    }
}
