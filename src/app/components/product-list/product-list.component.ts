import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductItemComponent } from "../product-item/product-item.component";
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [ProductItemComponent ,CommonModule],
})
export class ProductListComponent implements OnInit, OnDestroy {
  producto: Producto[] = [];    
  productoSub: Subscription | undefined;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoSub = this.productoService.getProductos().subscribe({
      next: (producto: Producto[]) => {
        this.producto = producto;
        console.log(this.producto);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('completado');
      },
    });
  }

    ngOnDestroy(): void {
        this.productoSub?.unsubscribe();
        console.log('destroy');
    }
}
