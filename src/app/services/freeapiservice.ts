import { Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class freeApiService{
    constructor(private httpclient:HttpClient){}
    getInfo():Observable<any> {
        return this.httpclient.get("https://www.reddit.com/.json");
    }
}