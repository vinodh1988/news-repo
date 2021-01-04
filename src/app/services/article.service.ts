import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
httpOptions:any;

  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
   }

   getArticles():Observable<object>{
      return this.http.get("http://localhost:9000/Articles");
   }

   addArticle(obj:any):Observable<object>{
      return this.http.post("http://localhost:9000/Articles",obj,this.httpOptions);
   }
}

