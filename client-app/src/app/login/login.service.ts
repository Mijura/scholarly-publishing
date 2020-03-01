import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../shared/services/base.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

    baseService: BaseService = BaseService.getInstance();

    constructor(private httpClient: HttpClient) {
        
    }

    login(data): any {
        return this.httpClient.post<any>(
            "http://localhost:8080/api/user/login",
            data,
            this.baseService.Options
        ).pipe(
            tap(data => this.baseService.addJwtToHeader(data)),
            catchError(err => this.baseService.handleError(err))
        );
    }
}