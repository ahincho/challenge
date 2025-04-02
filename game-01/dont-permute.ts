export function findPair(numbers: number[], target: number): number[] {
  const seen = new Set<number>();
  for (const number of numbers) {
    const complement = target - number;
    if (seen.has(complement)) {
      return [complement, number];
    }
    seen.add(number);
  }
  return [];
}

const M = [2, 5, 8, 14, 0];
console.log(`M: [${M}]`);

const N = 10;
console.log(`N: ${N}`);

const pair = findPair(M, N);
console.log(`Pair: [${pair}]`);
