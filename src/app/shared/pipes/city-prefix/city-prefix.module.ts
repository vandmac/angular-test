import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CityPrefixPipe } from "./city-prefix.pipe";

@NgModule({
    declarations: [CityPrefixPipe],
    exports: [CityPrefixPipe],
    imports: [CommonModule]
})
export class CityPrefixModule { }