import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../models/product.class';
import { ToastrService } from 'ngx-toastr';

@Injectable(  )
export class ProductService {
  productList: AngularFireList<any> ;
  selectedProduct: Product = new Product();
  task:AngularFireUploadTask;
  ref: AngularFireStorageReference;
  url: string;
  dateAux: Date ;
  constructor(private afd: AngularFireDatabase, private afStorage: AngularFireStorage, private afs: AngularFirestore,private toastr:ToastrService) { 
    
    this.getProducts();
  }

  upload(productForm:NgForm,file:File,date:Date,toastr:ToastrService) {
    const id = this.afs.createId();
    const product = productForm.value;
    this.ref = this.afStorage.ref(id);
     this.ref.put(file).then(infoImage => {
       infoImage.ref.getDownloadURL().then(info => {
         product.image = info;
         product.date =date.toLocaleDateString();
         this.productList.push(product);
         this.toastr.success("Se creo con exito");
         productForm.reset();
       })
       
    }).catch(error => {
      this.toastr.error("Error al cargar la imagen");
    });;
  }

  addProduct(productForm: NgForm,file:File,date:Date,toastr:ToastrService) {
    this.upload(productForm,file,date,toastr);
    
    
  }

  removeProduct($key:string) {
    this.productList.remove($key);
  }
  getProducts() {
   return this.productList = this.afd.list<Product>('products');
  }
}
