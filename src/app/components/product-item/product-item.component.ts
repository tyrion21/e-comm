import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{
  @Input() producto: Producto | undefined;

  ngOnInit(): void {
      console.log(this.producto);
      
  }
} 
