import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../core/service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  imports: [RouterModule, CommonModule]
})
export class HeaderComponent implements OnInit {

  constructor(public cartService: CartService) { }
  ngOnInit() {}

}
