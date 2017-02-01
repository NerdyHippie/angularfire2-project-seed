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


import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdMenuModule } from '@angular2-material/menu';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';


import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';

import { TestRouting,TestRouteComponents } from './test.routing';


@NgModule({
  imports: [
    CommonModule,
	  BrowserModule,
	  FormsModule,
	  HttpModule,
	  TestRouting,
	  MdButtonModule.forRoot(),
	  MdButtonToggleModule.forRoot(),
	  MdCardModule.forRoot(),
	  MdCheckboxModule.forRoot(),
	  MdCoreModule.forRoot(),
	  MdGridListModule.forRoot(),
	  MdIconModule.forRoot(),
	  MdInputModule.forRoot(),
	  MdListModule.forRoot(),
	  MdMenuModule.forRoot(),
	  MdProgressBarModule.forRoot(),
	  MdProgressCircleModule.forRoot(),
	  MdRadioModule.forRoot(),
	  MdSidenavModule.forRoot(),
	  MdSliderModule.forRoot(),
	  MdSlideToggleModule.forRoot(),
	  MdTabsModule.forRoot(),
	  MdToolbarModule.forRoot(),
	  MdTooltipModule.forRoot()
  ],
  declarations: [TestRouteComponents]
})
export class TestModule {
	constructor(mdIconRegistry: MdIconRegistry) {
		mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
	}
}
