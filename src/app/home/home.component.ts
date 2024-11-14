import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../types';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  reciboActual: Recibo | undefined;

  ngOnInit() {
    if (this.recibos.length > 0) {
      this.reciboActual = this.recibos[0];
      this.reciboSeleccionado.emit(this.reciboActual);
      };
  }
  recibos: Recibo[] = [
    { nombre: 'Recibo Enero', imagen: './assets/recibo-enero.png', descripcion: 'Detalles del recibo de Enero' },
    { nombre: 'Recibo Febrero', imagen: './assets/recibo-febrero.png', descripcion: 'Detalles del recibo de Febrero' },
    { nombre: 'Recibo Marzo', imagen: './assets/recibo-marzo.png', descripcion: 'Detalles del recibo de Marzo' }
  ];
  @Input() recibo: Recibo | null = null; // Recibo recibido desde la lista
  @Output() reciboSeleccionado = new EventEmitter<Recibo>();

  selectedRecibo: Recibo | null = null;

  // Maneja la selección de un recibo
  selectRecibo(recibo: Recibo) {
    this.selectedRecibo = recibo;
  }

selectedImage: any = null;
  selectedImageInfo: string = '';

  // Maneja la selección de imagen
  onImageSelect(image: any) {
    this.selectedImage = image;
    this.selectedImageInfo = image.info;
  }
  onSearch() {
    alert('Función de búsqueda en construcción...');
  }

  onPrint() {
    window.print();
  }
}

interface Recibo {
  nombre: string;
  imagen: string;
  descripcion: string;
}



