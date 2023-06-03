import { updateDo } from "typescript";

type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    public length: number;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        const newNode = { value: item } as Node<T>;

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const currHead = this.head;
        this.head = this.head.next;

        currHead.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return currHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
