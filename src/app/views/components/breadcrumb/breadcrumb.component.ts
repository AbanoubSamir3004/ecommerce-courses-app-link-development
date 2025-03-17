import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  url?: string;
  active?: boolean;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass'],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class BreadcrumbComponent implements OnInit {
  @Input() items: BreadcrumbItem[] = [];
  
  ngOnInit() {
 
  }
}