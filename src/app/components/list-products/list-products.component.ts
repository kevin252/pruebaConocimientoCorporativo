import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.class';
import { ProductService } from './../../services/product/product.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  selectedProduct: Product;
  products: Product[] ;
  displayDialog: boolean;
  displayDialogAddProduct: boolean;
    sortOptions: SelectItem[];
    sortKey: string;
    sortField: string;

    sortOrder: number;
  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().snapshotChanges().subscribe(content => {
      this.products = [];
      content.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.products.push(x as Product);
      });
      console.log(this.products);
    })
    this.sort();
  }
  selectProduct(event: Event, product: Product) {
    this.selectedProduct = product;
    this.displayDialog = true;
    event.preventDefault();
  }

  showDisplayDialogAddProduct(event:Event) {
    this.displayDialogAddProduct = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

onDialogHide() {
    this.selectedProduct = null;
}
  
  removeProduct($key:string) {
    this.productService.removeProduct($key);
  }
  
sort() {
  this.sortOptions = [
    {label: 'ID', value: 'id'},
    { label: 'NOMBRE', value: 'name' }
  
  ];
}
}
