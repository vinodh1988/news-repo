import { Component, Input, OnInit } from '@angular/core';
import { comment } from 'src/app/models/comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
@Input() comment:any;
  constructor() { }

  ngOnInit(): void {
  }

}
