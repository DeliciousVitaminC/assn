import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CoffeeListComponent} from "./coffeeList.component";

@NgModule({
  declarations: [CoffeeListComponent],
  imports: [CommonModule],
  exports: [CoffeeListComponent]
})
export class CoffeeListModule {}
