
import {module} from './module';

export class A {
  constructor() {
    console.log('this is dependency A'+module);
  }
}

export class B {
  constructor() {
    console.log('this is dependency B');
  }
}