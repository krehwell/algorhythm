const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const getPivot = ({
    arr,
    lo,
    hi,
}: {
    arr: number[];
    lo: number;
    hi: number;
}) => {
    let swapIndex = lo - 1;

    for (let i = lo; i <= hi; i++) {
        if (arr[i] <= arr[hi]) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }

    return swapIndex;
};

const sort = ({ arr, lo, hi }: { arr: number[]; lo: number; hi: number }) => {
    if (lo < hi) {
        const pivot = getPivot({ arr, lo, hi });
        sort({ arr, lo: pivot + 1, hi });
        sort({ arr, lo, hi: pivot - 1 });
    }
};

export default function quick_sort(arr: number[]): void {
    sort({ arr, lo: 0, hi: arr.length - 1 });
}
