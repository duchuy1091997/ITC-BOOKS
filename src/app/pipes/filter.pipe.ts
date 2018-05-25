import{Pipe, PipeTransform} from '@angular/core';
import {IBook} from '../interfaces/IBook';
@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{
    transform(books:IBook[],...args:any[]): any{
        const keyword=args[0];
        return books.filter(p=>p.title.toLowerCase().includes(keyword));
    }
}