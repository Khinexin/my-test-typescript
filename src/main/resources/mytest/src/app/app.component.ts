import { Component } from '@angular/core';
import {Family, IPersonItem, MyService, Person} from "./models/custom.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytest';

  constructor(private myService: MyService) {}

  ngOnInit() {

    this.testDefaultValuePrepareFunction1 ();

    this.testDefaultValuePrepareFunction2 ();

    this.testAssignAValToInterface();

  }


  testDefaultValuePrepareFunction1 () {

    /*
    * TYPESCRIPT -- interface with default value
    * function createMyInterface(options?: Partial<MyInterface>): MyInterface {
      const defaultValue: MyInterface = {
        a: 0,
        b: "default-string",
        c: null,
      };
      return {
        ...defaultValue,
        ...options,
      }
    }
    console.log(createMyInterface()); // { a: 0, b: 'default-string', c: null }
    console.log(createMyInterface({ a: 999, c: "set-my-string" })); // { a: 999, b: 'default-string', c: 'set-my-string' }
    */

    // interface, how to define default value
    const person = new Person(); // id = '', name = 'John'
    const person2 = new Person({name: 'Morpheus'}); // id = '', name = 'Morpheus'

    console.log(person);
    console.log(person2);


  }

  testDefaultValuePrepareFunction2 () {

    // interface, how to define default value
    const name =  "suil";
    const family = new Family("Street# 1");

    console.log(family);

  }

  testAssignAValToInterface(){
    // Assign a value to an interface property using a function on another in angular / typescript?
    const person: IPersonItem = this.myService.getPersonItem();
    console.log(person.fullName); // "first last"
  }
}
