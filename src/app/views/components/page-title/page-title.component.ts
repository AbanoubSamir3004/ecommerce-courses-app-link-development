import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.sass']
})
export class PageTitleComponent implements OnInit {

  @Input() title: string = '';
  constructor() { }

  ngOnInit() {
  }

}
