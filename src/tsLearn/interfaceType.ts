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
