// ts中定义方法 传入参数
export interface IFullName {
  firstName: string;
  lastName: string;
}

export function printName(fullName: IFullName): void {
  console.log(fullName.firstName + fullName.lastName);
}

printName({
  firstName: 'aaa',
  lastName: 'vvv',
});

// 接口可选属性
interface IFullInfo {
  firstName: string;
  lastName?: string;
}

export function printOptionInfo(info: IFullInfo): void {
  console.log(info.firstName + (info.lastName || ''));
}

// 函数类型接口
interface IEncrypt {
  (key: string, value: string): string;
}

export const md5: IEncrypt = function(key: string, value: string): string {
  return key + value;
};

md5('aaa', 'bbb');

// 可索引接口 (数组, 对象的约束)
// 数组
interface UserArray {
  [index: number]: string;
}

const userarr: UserArray = ['aa', 'bbb'];
console.log(userarr);

// 对象
interface IUserObj {
  [index: string]: string;
}

export const userObjArr: IUserObj = { name: '20' };

// 类类型接口  约束 类
interface IAnimal {
  name: string;
  eat(str: string): void;
}

export class Dog implements IAnimal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(this.name + '吃粮食');
  }
}

export interface IPerson extends IAnimal {
  work(): void;
}

export class Weber implements IPerson {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log('喜欢吃馒头');
  }

  work() {
    console.log('写代码');
  }
}
