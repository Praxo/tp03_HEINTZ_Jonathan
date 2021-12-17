import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './model/Article';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient: HttpClient) { }

  public getClient() {
    return "get client";
  }

  public postClient() {
    return "post client";
  }

  public postLogin() {
    return "post login";
  }

  public getCatalogue(): Observable<Array<Article>> {
    return this.httpClient
      .get<any>(environment.baseUrl);
  }
}
