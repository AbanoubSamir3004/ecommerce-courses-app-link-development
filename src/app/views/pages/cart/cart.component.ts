import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItem } from "../../components/breadcrumb/breadcrumb.component";
import { PageTitleComponent } from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
  imports: [BreadcrumbComponent , PageTitleComponent]
})
export class CartComponent implements OnInit {

  items: BreadcrumbItem[] = [
    { label: 'Categories', url: '/categories' },
    { label: 'Details', url: '/details' },
    { label: 'Shopping Cart', url: '/cart', active: true }
  ];

  constructor() { }

  ngOnInit() {
  }

}
