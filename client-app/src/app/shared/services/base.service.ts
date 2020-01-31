import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'

@Injectable()
export class BaseService {

  constructor() { }

  public get Options() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
