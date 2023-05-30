export default function bs_list(haystack: number[], needle: number): boolean {
    let hi = haystack.length;
    let lo = 0;

    do {
        const mid = lo + (hi - lo) / 2;
        const v = haystack[mid];

        if (v === needle) {
            return true;
        } else if (v < needle) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    } while (lo < hi);

    return false;
}
