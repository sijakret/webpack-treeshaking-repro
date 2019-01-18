

import asm from './asm-module';

export class A {
  constructor() {
    console.log('this is dependency A'+asm);
  }
}

export class B {
  constructor() {
    console.log('this is dependency B');
  }
}