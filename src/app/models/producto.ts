export interface Producto {
  _id: number;
  nombre: string;
  descripcion: string;
  categoria: string[];
  imageUrl: string[];
  precio_venta: number;
  precio_regular: number;
  slug?: string;    
  created_at: Date;
  updated_at?: Date;
}
