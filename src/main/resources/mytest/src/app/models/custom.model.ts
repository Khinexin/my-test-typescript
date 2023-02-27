// export class CustomModel {
// }
// interface MyInterface {
//   a: number;
//   b: string;
//   c: unknown;
// }

export interface Person {
  id?: string;
  name?: string;
}
// intreface and class same name therefore no need to implements

export class Person {
  constructor(person?: Person) {
    return {
      id: person ? person.id : '',
      name: person ? person.name : 'John',
    }
  }
}
/////////////////

class Person2 implements Person {
  id = '';
  name = 'John';
}

export class Family {
  constructor(public address: string, public members: Person[] = [new Person()]){
  }
}

//////////////////

export interface IPersonItem {
  _id?: number;
  name: string;
  lastName: string;
  fullName: string;
}

export class PersonItem implements IPersonItem {
  constructor(
    public name: string,
    public lastName: string,
    public _id?: number
  ) {
  }

  get fullName() { return `${this.name} ${this.lastName}`; }
}

export class MyService {
  getPersonItem(): IPersonItem {
    return new PersonItem('first', 'last', 123);
  }
}
