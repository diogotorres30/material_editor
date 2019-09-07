import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ AppComponent, HomeComponent, EditorComponent ],
	imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
