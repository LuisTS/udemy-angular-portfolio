import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/products.interface';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Products[] = [];
  productsFiltered: Products[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  private getProducts() {

    return new Promise((resolve, reject) => {
      this.http.get('https://udemy-angular-html-bd08f.firebaseio.com/productos_idx.json').subscribe((response: Products[]) => {
        this.loading = false;
        this.products = response;
        resolve();
      });
    });

  }

  getProduct(id: string) {
    return this.http.get(`https://udemy-angular-html-bd08f.firebaseio.com/productos/${id}.json`);
  }

  searchProducts(search: string) {
    if (this.products.length === 0) {
      this.getProducts().then(() => {
        this.filterProducts(search);
      });
    } else {
      this.filterProducts(search);
    }
  }

  private filterProducts(search: string) {
    this.productsFiltered = [];
    search = search.toLocaleLowerCase();
    this.products.forEach(product => {
      const titleLower = product.titulo.toLocaleLowerCase();
      if (product.categoria.indexOf(search) >= 0 || titleLower.indexOf(search) >= 0) {
        this.productsFiltered.push(product);
      }
    });
  }

}
