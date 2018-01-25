import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  constructor() {
  }
  cleanObj(input: Object) {
    const invalidProps = ['$key', '$exists'];
    for (const prop of invalidProps) {
      delete input[prop];
    }
    return input;
  }

}
