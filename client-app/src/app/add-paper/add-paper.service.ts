import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AddPaperService{

    baseService: BaseService = BaseService.getInstance();

    constructor(private httpClient: HttpClient) {

    }

    addPaper(paper: any): any{
        const data = {
            data: paper
        }
        return this.httpClient.post<any>(
            "http://localhost:8080/api/paper/add",
            JSON.stringify(data),
            this.baseService.Options
        ).pipe(
            tap(data => { console.log(data) }),
            catchError(err => this.baseService.handleError(err))
        )
    }

}