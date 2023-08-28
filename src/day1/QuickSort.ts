const swap = (arr: number[], i: number, j: number) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

const partition = (arr: number[], lo: number, hi: number): number => {
    let swapIndex = lo - 1;

    for (let i = lo; i <= hi; i++) {
        if (arr[i] <= arr[hi]) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }

    return swapIndex;
};

const sort = (arr: number[], lo: number, hi: number) => {
    if (lo < hi) {
        let pivot = partition(arr, lo, hi);
        sort(arr, pivot + 1, hi);
        sort(arr, lo, pivot - 1);
    }
};

export default function quick_sort(arr: number[]): void {
    sort(arr, 0, arr.length - 1);
}
