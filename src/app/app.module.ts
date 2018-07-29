import { AddProductComponent } from './components/add-product/add-product.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CountryService } from './services/country/country.service';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { environment } from '../environments/environment';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { LoginComponent } from './components/login/login.component';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ProductService } from './services/product/product.service';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'primeng/primeng';
import { StepsModule } from 'primeng/steps';
import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes = [
  { path: '', redirectTo: '/listProducts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'listProducts', component: ListProductsComponent },
  { path: 'profile', component: ProfileComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ListProductsComponent,
    AddProductComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireStorageModule, MenubarModule, SharedModule,
    CardModule, StepsModule, RouterModule.forRoot(appRoutes), FormsModule, InputTextModule, PasswordModule, AutoCompleteModule, HttpClientModule,
    BrowserAnimationsModule, DropdownModule, CalendarModule, ButtonModule, AngularFireDatabaseModule, ToastrModule.forRoot(), DataViewModule, PanelModule, DialogModule,
    FileUploadModule,CurrencyMaskModule
  ],
  providers: [AuthenticationService, ProductService,CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
