import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { MdCoreModule } from '@angular2-material/core'
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox'
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdSliderModule } from '@angular2-material/slider';

import { TestRouting,TestRouteComponents } from './test.routing';


@NgModule({
  imports: [
    CommonModule,
	  BrowserModule,
	  FormsModule,
	  HttpModule,
	  TestRouting,
	  MdCoreModule.forRoot(),
	  MdCardModule.forRoot(),
	  MdButtonModule.forRoot(),
	  MdRadioModule.forRoot(),
	  MdCheckboxModule.forRoot(),
	  MdTooltipModule.forRoot(),
	  MdSliderModule.forRoot()
  ],
  declarations: [TestRouteComponents]
})
export class TestModule { }
