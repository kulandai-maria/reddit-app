import { Component } from '@angular/core';
import { freeApiService } from './services/freeapiservice';
// import { Comments } from './comments/comments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reddit-app';
  constructor(private freeapiservice: freeApiService) { }
  ngOnInit(): void {
    this.freeapiservice.getInfo().subscribe(
      data=>{
      }
    )
  }
}
