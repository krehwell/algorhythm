type Node<T> = {
    next: Node<T>;
    prev: Node<T>;
    val: T;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = { val: item } as Node<T>;
        this.length++;

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        const currHead = this.head;
        this.head = newNode;
        this.head.next = currHead;
    }

    insertAt(item: T, idx: number): void {
        if (!this.head || !this.tail || !this.length || idx > this.length) {
            return;
        }

        const newNode = { val: item } as Node<T>;

        let node = {} as Node<T>;
        for (let i = 0; i <= idx; i++) {
            if (i === 0) {
                node = this.head;
            } else {
                node = node?.next;
            }
        }

        const prevNext = node.next;

        node.next = newNode;
        newNode.prev = node;
        newNode.next = prevNext;
    }

    append(item: T): void {
        this.length++;

        const newNode = { val: item } as Node<T>;

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        const prevNode = this.tail;
        this.tail = newNode;
        prevNode.next = this.tail;
        this.tail.prev = prevNode;
    }

    remove(item: T): T | undefined {
        if (!this.head || !this.tail || !this.length) {
            return;
        }

        let node = {} as Node<T>;
        for (let i = 0; i <= this.length; i++) {
            if (i === 0) {
                node = this.head;
            } else {
                node = node?.next;
            }

            if (node?.val === item) {
                this.length--;

                if (this.head === node) {
                    this.head = node.next;
                } else if (this.tail === node) {
                    this.tail = node.prev;
                } else {
                    node.prev.next = node.next;
                    node.next.prev = node.prev;
                }
                return node.val;
            }
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (!this.head || !this.tail) {
            return;
        }

        let node = {} as Node<T>;
        for (let i = 0; i <= idx; i++) {
            if (i === 0) {
                node = this.head;
            } else {
                node = node?.next;
            }
        }
        return node?.val;
    }

    removeAt(idx: number): T | undefined {
        if (!this.head || !this.tail || !this.length) {
            return;
        }

        this.length--;

        let node = {} as Node<T>;
        let i = 0;
        while (i <= idx) {
            if (i === 0) {
                node = this.head;
            } else {
                node = node?.next;
            }
            i++;
        }

        if (this.head === node) {
            this.head = node.next;
        } else if (this.tail === node) {
            this.tail = node.prev;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        return node.val;
    }
}
