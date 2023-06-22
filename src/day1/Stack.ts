type Node<T> = {
    next?: Node<T>;
    value: T;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    push(item: T): void {
        this.length++;

        const newNode = { value: item } as Node<T>;

        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
            return
        }

        newNode.next = this.tail;
        this.tail = newNode;
    }

    pop(): T | undefined {
        if (!this.tail) {
            return undefined;
        }

        this.length--;

        const tail = this.tail
        this.tail = tail.next

        tail.next = undefined

        return tail.value
    }

    peek(): T | undefined {
        return this.tail?.value;
    }
}
