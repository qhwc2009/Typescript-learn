// 泛型 可以支持不特定类型
export function getDate<T>(value: T): T {
  return value;
}

const data = getDate<number>(3);
console.log(data);

export function getData1<T>(value: T): any {
  return 'aaa' + value;
}

// 类
// class MinClass {
//   public list: number[] = [];
//   add(num: number) {
//     this.list.push(num);
//   }

//   min(): number {
//     let minNum = this.list[0];
//     this.list.forEach(i => {
//       if (minNum > i) {
//         minNum = i;
//       }
//     });
//     return minNum;
//   }
// }

// const m = new MinClass();
// m.add(2);
// m.add(21);
// m.add(22);
// m.add(23);

// const minNumber: number = m.min();
// console.log(minNumber);

// 类的泛型
class MinClass<T> {
  public list: T[] = [];
  add(value: T): void {
    this.list.push(value);
  }

  min(): T {
    let minNum = this.list[0];
    this.list.forEach(i => {
      if (minNum > i) {
        minNum = i;
      }
    });
    return minNum;
  }
}

const m = new MinClass<number>();
m.add(2);
m.add(21);
m.add(22);

const minNumber: number = m.min();
console.log(minNumber);

// 泛型接口1
interface IConfigFn {
  <T>(value1: T): T;
}

const gettttData: IConfigFn = function<T>(value: T): T {
  return value;
};

gettttData<string>('aaaa');
gettttData<number>(123);

// 泛型接口2
interface IConfigFn2<T> {
  (value1: T): T;
}

function getttttttttttttata<T>(value: T): T {
  return value;
}

const myGetData: IConfigFn2<string> = getttttttttttttata;

myGetData('aaaa');
