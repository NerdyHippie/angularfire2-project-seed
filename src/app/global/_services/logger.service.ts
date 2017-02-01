import { Injectable } from '@angular/core';

@Injectable()

export class Logger {
	logs: string[] = []; // capture logs for testing
	errors: string[] = [];
	debugMode:Boolean = false;

	log(message: string, ...params:Array<any>):void {
		if (this.debugMode) {
			this.logs.push(message);
			console.info(message,params);
		}
	}
	
	toggleDebug(state?:string):void {
		switch(state) {
			case 'enable': this.debugMode = true; break;
			case 'disable': this.debugMode = false; break;
			default: this.debugMode = !this.debugMode; break;
		}
		
	}
	
	error(message:string,...params:Array<any>):void {
		if (this.debugMode) {
			this.errors.push(message);
			console.error(message,params);
		}
	}
}
