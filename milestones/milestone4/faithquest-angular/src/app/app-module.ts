import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { CreateProduct } from './create-product/create-product';
import { EditProduct } from './edit-product/edit-product';
import { DeleteProduct } from './delete-product/delete-product';

@NgModule({
  declarations: [App, Home, ProductList, ProductDetail, CreateProduct, EditProduct, DeleteProduct],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
