export function normalFunc() {}

// ts中的函数
export function stringFunc(): string {
  return 'aaa';
}

// 传参
export function hasParamsFunc(name: string, age: number): string {
  return name + age;
}

// 可选参数
export function optionalParamFunc(name: string, age?: number): string {
  return name + age;
}

// 剩余参数
export function sumFunc(a: number, b: number, c: number, d: number): number {
  return a + b + c + d;
}
export function sumFunc1(...rest: number[]): number {
  return rest.reduce((a, r) => a + r, 0);
}

// 箭头函数
export const arrowFunc: () => void = () => {};
