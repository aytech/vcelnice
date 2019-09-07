import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';
import { VideoComponent } from './video/video.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { RegionComponent } from './region/region.component';
import { NewsComponent } from './news/news.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PricesComponent } from './prices/prices.component';
import { ReservationComponent } from './prices/prices.component';
import { ContactComponent, ContactModalComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyComponent } from './privacy/privacy.component';
import {
  HomeService,
  NewsService,
  PhotoService,
  PriceService,
  VideoService,
  CertificateService,
  RecipeService,
  ContactService,
  GenericService
} from 'services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoComponent,
    VideoComponent,
    CertificatesComponent,
    RegionComponent,
    NewsComponent,
    RecipesComponent,
    PricesComponent,
    ReservationComponent,
    ContactComponent,
    ContactModalComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    PrivacyComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    HomeService,
    NewsService,
    PhotoService,
    PriceService,
    VideoService,
    CertificateService,
    RecipeService,
    ContactService,
    GenericService
  ],
  entryComponents: [
    ReservationComponent,
    ContactModalComponent
  ],
  exports: [PrivacyComponent]
})
export class AppModule { }
