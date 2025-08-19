import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  products: any[] = [];
  tops: any[] = [];
  bottoms: any[] = [];
  shoes: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      this.tops = products.filter((product: any) => product.id >= 11 && product.id <= 20);
      this.bottoms = products.filter((product: any) => product.id >= 21 && product.id <= 30);
      this.shoes = products.filter((product: any) => product.id >= 1 && product.id <= 10);
    });
  }
}
