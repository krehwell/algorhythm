const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
};

const getPivot = (arr: number[], lo: number, hi: number): number => {
    let swapIndex = lo - 1;

    for (let i = lo; i <= hi; i++) {
        if (arr[i] <= arr[hi]) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }

    return swapIndex;
};

const sort = (arr: number[], lo: number, hi: number): void => {
    if (lo < hi) {
        const pivot = getPivot(arr, lo, hi);
        sort(arr, lo, pivot - 1);
        sort(arr, pivot + 1, hi);
    }
};

export default function quick_sort(arr: number[]): void {
    sort(arr, 0, arr.length - 1);

    console.log(arr);
}
