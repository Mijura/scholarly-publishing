import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AddPaperService extends BaseService{

    constructor(private httpClient: HttpClient) {
        super();
    }

    addPaper(paper: any): any{
        const data = {
            data: paper
        }
        return this.httpClient.post<any>(
            "http://localhost:8080/api/paper/add",
            JSON.stringify(data),
            this.Options
        ).pipe(
            tap(data => { console.log(data) }),
            catchError(this.handleError)
        )
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
}