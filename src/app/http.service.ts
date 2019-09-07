import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { IIssue } from './editor/issue';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _url: string = "/assets/data/issues.json";
  constructor(private http: HttpClient) { }

  getIssues(){
    return this.http.get<IIssue[]>(this._url);
  }
}
