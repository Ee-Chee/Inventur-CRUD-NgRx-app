import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RootStoreModule } from './root-store/root-store.module';
import { AddGoodsComponent } from './components/add-goods/add-goods.component';
import { HomeComponent } from './components/home/home.component';
import { TransformUnitPipe } from './pipes/transform-unit';

@NgModule({
  declarations: [
    AppComponent,
    AddGoodsComponent,
    HomeComponent,
    TransformUnitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
