import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../models/producto';
import { Subscription } from 'rxjs';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit, OnDestroy{
  slug: string | undefined

  producto: Producto | undefined;
  productoSub: Subscription | undefined;
  galeria: Array<any> = [];
  renderGaleria: boolean = false; 
  currentImg: string | undefined;

  constructor(private route: ActivatedRoute, private productoService: ProductoService) {}

  ngOnInit(): void {
    
    this.slug = this.route.snapshot.params['id']
    console.log(this.slug);
    this.productoSub = this.productoService.getProductos().subscribe({
      next: (productos: Producto[]) => {
        this.producto = productos.filter((producto) => producto.slug === this.slug)[0];
        this.currentImg = this.producto.imageUrl[0]
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
