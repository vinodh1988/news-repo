import { Component, Input, OnInit } from '@angular/core';
import { article } from 'src/app/models/article';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() article:any;
  constructor() { }

  ngOnInit(): void {
  }

}
