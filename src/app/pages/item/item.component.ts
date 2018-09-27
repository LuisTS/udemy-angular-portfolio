import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: Product;
  id: string;

  constructor(private route: ActivatedRoute,
              public productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.productsService.getProduct(params['id'])
      .subscribe((response: Product) => {
        console.log(response);
        this.id = params['id'];
        this.product = response;
      });
    });
  }

}
