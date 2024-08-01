export function formatNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'm';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    } else {
        return num.toString();
    }
}

//   // Example usage:
//   console.log(formatNumber(1234));     // Output: 1.2k
//   console.log(formatNumber(10000));    // Output: 10k
//   console.log(formatNumber(100000));   // Output: 100k
//   console.log(formatNumber(1000000));  // Output: 1m
//   console.log(formatNumber(1234567));  // Output: 1.2m

export function generateUniqueNumbers() {
    const numbers = [5, 6, 7, 8, 9, 10];
    const shuffled = numbers.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
}
