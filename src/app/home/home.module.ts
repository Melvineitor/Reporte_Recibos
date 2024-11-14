import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
