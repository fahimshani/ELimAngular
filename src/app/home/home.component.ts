import { Component, Inject, OnInit, OnDestroy  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy  {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('home');
  }
 

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('home');
  }

}
