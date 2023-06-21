import { Component } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor(private productService: ProductService) {}

  get products(){
    return this.productService.products;
  }

  onSelectProduct(productId : number): void{
    this.productService.selectProduct(productId);
  }
}
