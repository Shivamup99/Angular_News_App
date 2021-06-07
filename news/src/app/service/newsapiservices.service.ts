import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl ="https://newsapi.org/v2/top-headlines?country=us&apiKey=dffab6d88e1b458ab8fdc43e45973320"
//topHeading()
  topHeading() : Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}
