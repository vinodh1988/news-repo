import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

title:string="";
text:string="";
errors:string[]=[];
  constructor(private as:ArticleService) { }

  ngOnInit(): void {
  
  }

  postData(): void 
  {
      this.errors=[];
     if(this.title.length<15)
       this.errors.push("Title should be atleast 15 charectar long");
     if(this.text.length<100)
       this.errors.push("Article should be atlease 100 characters long");

       if(this.errors.length==0){
           this.as.addArticle({title:this.title,text:this.text}).subscribe(
             (res:any)=> {
              alert("Article published")
               this.title="";
               this.text="";
             },
             (err:any)=>{
              alert("Something went wrong")
              
             }
           )
       }
     
  }

}
