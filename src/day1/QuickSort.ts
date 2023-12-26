const swap = (i: number, j: number, arr: number[]) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const getPivot = ({
    lo,
    hi,
    arr,
}: {
    lo: number;
    hi: number;
    arr: number[];
}) => {
    let swapIndex = lo - 1;

    for (let i = lo; i <= hi; i++) {
        if (arr[i] <= arr[hi]) {
            swapIndex++;
            swap(i, swapIndex, arr);
        }
    }

    return swapIndex;
};

const sort = ({ lo, hi, arr }: { lo: number; hi: number; arr: number[] }) => {
    if (lo < hi) {
        const pivot = getPivot({ lo, hi, arr });
        sort({ lo: pivot + 1, hi, arr });
        sort({ lo, hi: pivot - 1, arr });
    }
};

export default function quick_sort(arr: number[]): void {
    sort({ lo: 0, hi: arr.length - 1, arr });
}
