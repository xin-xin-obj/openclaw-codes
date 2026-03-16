/**
 * 斐波那契数列计算器
 *
 * 使用迭代算法实现，避免递归导致的性能问题
 */

/**
 * 计算第 n 个斐波那契数
 * @param n - 非负整数
 * @returns 第 n 个斐波那契数
 * @throws {TypeError} 如果 n 不是整数
 * @throws {RangeError} 如果 n < 0
 *
 * @example
 * fibonacci(0) // 0
 * fibonacci(1) // 1
 * fibonacci(10) // 55
 */
export function fibonacci(n: number): number {
  // 类型检查
  if (!Number.isInteger(n)) {
    throw new TypeError("n must be an integer");
  }

  // 范围检查
  if (n < 0) {
    throw new RangeError("n must be >= 0");
  }

  // 基础情况
  if (n === 0) return 0;
  if (n === 1) return 1;

  // 迭代计算
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i += 1) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

/**
 * 计算前 n 个斐波那契数
 * @param n - 数量
 * @returns 前 n 个斐波那契数的数组
 */
export function fibonacciSequence(n: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    result.push(fibonacci(i));
  }
  return result;
}

/**
 * 检查一个数是否是斐波那契数
 * @param num - 要检查的数
 * @returns 是否是斐波那契数
 */
export function isFibonacci(num: number): boolean {
  if (num < 0) return false;
  const check = (num: number): boolean => {
    const isPerfectSquare = (x: number): boolean => {
      const s = Math.sqrt(x);
      return s === Math.floor(s);
    };
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
  };
  return check(Math.round(num));
}
