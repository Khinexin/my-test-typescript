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




