import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../interface/product.interface';
import { ProductsRequestService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productsList!: Product[];
  constructor(private productsRequestService: ProductsRequestService) {}

  ngOnInit() {
    this.productsRequestService.getProductsList().subscribe((data: any) => {
      this.productsList = data.products;
    });
  }
}