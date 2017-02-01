import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
	
	constructor() { }
	
	cleanObj(input:Object) {
		let invalidProps = ['$key','$exists'];
		for (let prop of invalidProps) {
			delete input[prop];
		}
		return input;
		
		/*
		 let ret = {};
		 let invalidProps = ['$key','$exists'];
		 for (let prop in input) {
		 if (invalidProps.indexOf(prop) == -1 && input.hasOwnProperty(prop)) {
		 ret[prop] = input[prop];
		 }
		 }
		 return ret;
		
		*/
	}

}
