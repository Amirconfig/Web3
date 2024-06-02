import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { FormDataComponent } from './form-data/form-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MaterialModule, ReactiveFormsModule, FormsModule, HttpClientModule, 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
