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
  getDataWithKey(dataList: any) {
    dataList.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
}
