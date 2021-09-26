import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { freeApiService } from '../services/freeapiservice';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PostDetailComponent implements OnInit {
  postDetail:any;
  // postImg:string='';
  // postAuthor:string='';
  Comments:any;
  num:number=0;
  constructor(private freeapiservice: freeApiService, private route:ActivatedRoute )  { }
  ngOnInit(): void {
    // this.freeapiservice.getInfo().subscribe(
    //   data=>{
    //     this.postDetail = data[0].data.children[0].data.title;
    //     this.Comments = data[1].data.children;
    //   }
    // )
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.postDetail = params;
      // this.postImg = params.timg;
      // this.postAuthor = params.tauthor;
    });
  }

}
