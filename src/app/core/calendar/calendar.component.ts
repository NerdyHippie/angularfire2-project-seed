import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'calendar',
    templateUrl: 'calendar.component.html'
})
export class CalendarComponent implements OnInit {
		// TODO: Explore the Calendar Component.  Probably will want to replace with PrimeNG/Schedule
		value: Date;
		
		constructor() { }

    ngOnInit() { }
    
}
