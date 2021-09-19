import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { freeApiService } from '../services/freeapiservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  namelist:any;
  constructor(private freeapiservice: freeApiService )  { }
  ngOnInit(): void {
    this.freeapiservice.getInfo().subscribe(
      data=>{
        console.log(data.data.children);
        // for (var i of data.data.children) {
        //   console.log(JSON.stringify(data.data.children(i)));

        // }
        // var i=0;
        // data.data.children.forEach(function(){
        // console.log(JSON.stringify(data.data.children[i]));
        //   i++;
        // });
        this.namelist= data.data.children;

      }
    )
  }
}
