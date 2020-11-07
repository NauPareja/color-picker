import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Components */
import { ColorComponent } from './components/color/color.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

/* Pages */
import { HomeComponent } from './pages/home/home.page';

@NgModule({
  declarations: [
    AppComponent,
    
    ColorComponent,
    ColorPickerComponent,

    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
