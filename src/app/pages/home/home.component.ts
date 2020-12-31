import { Component, OnInit } from '@angular/core';
import { article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
articles:any;
  constructor(private as:ArticleService) { 

    
  }

  ngOnInit(): void {
        this.as.getArticles().subscribe(
           (data)=>this.articles =data,
           ()=>this.articles=[]
        )
    
  }

}
