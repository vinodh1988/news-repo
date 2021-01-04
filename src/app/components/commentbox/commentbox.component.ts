import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {

@Input()  articleid:number=0;
comments:any=[];
    constructor(private cs:CommentsService)  { }

  ngOnInit(): void {

      this.cs.getComments(this.articleid).subscribe(
        (data:any)=>this.comments=data,
        ()=>this.comments=""
      );
  }

}
