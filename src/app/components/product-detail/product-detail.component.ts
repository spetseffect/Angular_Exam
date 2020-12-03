import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product: Product;
  constructor(private route: ActivatedRoute,
    private router: Router, private productService: ProductService) {
    let param = this.route.snapshot.paramMap.get("id");
    this.product = this.productService.getById(+param);


  }
  goToProducts() {
    this.router.navigate(["/products"]);
  }

}
