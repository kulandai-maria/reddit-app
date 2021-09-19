import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { freeApiService } from '../services/freeapiservice';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PostDetailComponent implements OnInit {
  // lst:Comments[];
  kind:string='';
  constructor(private freeapiservice: freeApiService )  { }
  ngOnInit(): void {
    this.freeapiservice.getInfo().subscribe(
      data=>{
        console.log(JSON.stringify(data[0]));
        this.kind = data;
      }
    )
  }

}
