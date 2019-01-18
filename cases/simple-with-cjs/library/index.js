

import cjs from 'object-hash';

export class A {
  constructor() {
    console.log('this is dependency A'+cjs);
  }
}

export class B {
  constructor() {
    console.log('this is dependency B');
  }
}