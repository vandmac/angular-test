import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'cityPrefix'
})
export class CityPrefixPipe implements PipeTransform {

    transform(cityName: string | undefined): string {
        return `From where i came:  ${cityName}`
    }
}