import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService)
   {}

  ngOnInit(): void {
    this.appService.getHeroes();
    this.appService.getBwics();
  }
  title = 'first-angular';
}
