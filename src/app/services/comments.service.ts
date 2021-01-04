import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comment } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  getComments(articleid:number):Observable<object>{
      return this.http.get("http://localhost:9000/comments?articleid="+articleid);

  }
}
