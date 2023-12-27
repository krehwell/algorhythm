export default class MinHeap {
    public length: number;
    public data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown = (idx: number) => {
        const lIdx = this.getLeftChild(idx);
        const rIdx = this.getRightChild(idx);

        if (idx >= this.length || lIdx >= this.length) {
            return;
        }

        const lVal = this.data[lIdx];
        const rVal = this.data[rIdx];
        const val = this.data[idx];

        if (lVal > rVal && val > rVal) {
            this.data[idx] = rVal;
            this.data[rIdx] = val;
            this.heapifyDown(rIdx);
        } else if (rVal > lVal && val > lVal) {
            this.data[idx] = lVal;
            this.data[lIdx] = val;
            this.heapifyDown(lIdx);
        }
    };

    private heapifyUp = (idx: number) => {
        if (idx === 0) {
            return;
        }

        const parent = this.getParent(idx);
        const parentVal = this.data[parent];
        const val = this.data[idx];

        if (parentVal > val) {
            this.data[idx] = parentVal;
            this.data[parent] = val;
            this.heapifyUp(parent);
        }
    };

    private getParent = (idx: number): number => {
        return Math.floor((idx - 1) / 2);
    };

    private getLeftChild = (idx: number) => {
        return idx * 2 + 1;
    };

    private getRightChild = (idx: number) => {
        return idx * 2 + 2;
    };
}
