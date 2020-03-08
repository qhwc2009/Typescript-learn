export class Person {
  name: string;
  protected sex: string = '男';
  constructor(name: string) {
    this.name = name;
  }

  run(): void {
    console.log('在运动跑步');
  }
}

const p: Person = new Person('张三');
p.run();

class Woman extends Person {
  private age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
}

const w: Woman = new Woman('李四', 23);
w.run();
