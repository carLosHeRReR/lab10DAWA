import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent  implements OnInit{
  listProductos: Producto[] = [];
  elementos: number = 0;
  
  constructor(private _productoService: ProductoService) {

  }
  
  ngOnInit(): void {
    
    this.obtenerProductos();

  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
      this.elementos = this.listProductos.length;
    })
  }

  /* eliminarProducto(id: any){
    this._productoService.deleteProducto(id).subscribe(data => {

      Swal.fire({
        title: 'Eliminacion de Producto',
        text: "¿Desea eliminar el producto?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerProductos();
          this.elementos = this.listProductos.length;
        }
      })
    })
  } */


}
