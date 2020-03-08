// 定义数组
// 1.
export const arr: number[] = [1, 2, 3, 4];
// 2.
export const arr2: Array<number> = [1, 2, 3];
// 元组类型 (属于数组一种)
export const arrYuan: [number, string] = [12, '222'];

// 枚举类型 (如果枚举的标识符没有赋值, 那么它的值就是下标. 下标可以根据前值而改变)
enum Flag {
  success = 1,
  error = 2,
}

export const s: Flag = Flag.success;
export const e: Flag = Flag.error;

// any类型
export let anyType: any = 'aasdf';
anyType = 123;

// null 与 undefined   (其他(never类型)数据类型的子类型)
export const undefinedType: undefined = undefined;

// void 方法无返回值
export function runVoid(): void {
  console.log(123);
}

// nerver类型
export const neverType: never = (() => {
  throw new Error('never');
})();



