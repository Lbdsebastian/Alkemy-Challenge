import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularUI';



  public constructor(private angularTitle: Title) { }

  ngOnInit(): void {
    this.angularTitle.setTitle('Alkemy-Challenge');
  }


}

