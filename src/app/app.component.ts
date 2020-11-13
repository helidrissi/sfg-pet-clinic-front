import { TestServiceService } from './test-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor(private test:TestServiceService){}
  index:any;
  ngOnInit(): void {
   this.getIndex()
  }
  title = 'sfg-pet-clinic-front';

  getIndex(){
    this.test.getIndex().subscribe(
      data=>this.index=data
    )
  }
}
