import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ProductListComponent]
})
export class HomeComponent {
  
}
