import {Injectable, Pipe,PipeTransform} from "@angular/core";

@Pipe({
	name: 'filterById'
})
@Injectable()
export class FilterByIdPipe implements PipeTransform {
	transform(items: any[], args: any[]): any {
		return (items && args.length) ? items.filter(item => args.indexOf(item.$key) !== -1) : [];
	}
}
