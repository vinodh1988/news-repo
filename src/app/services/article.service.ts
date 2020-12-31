import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) {
      
   }

   getArticles():Observable<object>{
      return this.http.get("http://localhost:9000/Articles");
   }
}

