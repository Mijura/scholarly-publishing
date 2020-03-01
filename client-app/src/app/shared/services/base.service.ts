import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs';

export class BaseService {

  private static instance: BaseService;
  private httpHeaders: any;

  private constructor() {
    this.httpHeaders = {
      'Content-Type': 'application/json',
    }
  }

  static getInstance(): BaseService {
    if (!BaseService.instance) {
      BaseService.instance = new BaseService();
    }

    return BaseService.instance;
  }

  public get Options() {
    return {
      headers: new HttpHeaders(this.httpHeaders)
    };
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  addJwtToHeader(data){
    this.httpHeaders["Authorization"] = data.jwt;
  }
}
