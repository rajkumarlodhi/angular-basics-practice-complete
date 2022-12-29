import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, param: any) {
        if (value.length > param) {
            return value.substr(0, param) + ' ...';
        }
        return value;
    }
}