import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Country } from './../../models/country.class';
import { CountryService } from './../../services/country/country.service';
import { Message, SelectItem } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Product } from '../../models/product.class';
import { ProductService } from './../../services/product/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  es: any;
  options;
  msgs: Message[];
  file: File;
    uploadedFiles: any[] = [];
  country: Country=new Country();
  product: Product = new Product();
  countries: Country[];
  date: Date;

  constructor(public productService: ProductService, private countryService: CountryService,private route: ActivatedRoute,
    private router: Router,private toastr:ToastrService) {
    this.getCountries();
  }

  ngOnInit() {
    this.languageEsCalendar();
  }

  upload(event) {
    this.file = event.target.files[0];
  }
  onSubmit(productForm:NgForm) {
    if (productForm.valid) {
      this.productService.addProduct(productForm.value,this.file,this.date,this.toastr);
    } else {
      this.toastr.error("Por favor ingrese todos los datos");
    }
   
    
  }
  getCountries() {
    this.countryService.getCountries().subscribe(content => {
      this.countries = content;
    });
  }
  
 
  languageEsCalendar() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }
  }
 
  close(productForm:NgForm) {
    productForm.resetForm();
    this.router.navigate(['/listProducts']);
  }
  
}
