import { Component, Inject, OnInit, OnDestroy  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy  {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('page-template-page-about-elim');
  }
 

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('page-template-page-about-elim');
  }

}