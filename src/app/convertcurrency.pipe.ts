import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertcurrency'
})
export class ConvertcurrencyPipe implements PipeTransform {

  transform(value: any, type:string,...args: unknown[]): unknown {



    switch(type){
      case "dollar":
        console.log("dolar " + value)
        return value * 23.40;
      case "euro":
        return value * 25.16;
      case "sterlin":
        return value * 29.41;
      default:
        throw new Error("Geçersiz parametre")
    }


//    return value * 23,40 ;
//return value * 25,16;

  }

}
