import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReciboscontrollerService } from './reciboscontroller.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial';
  reciboscontrollers: any[] = [];
  reciboscontrollerService = inject(ReciboscontrollerService);

  constructor(){
    this.reciboscontrollerService.get().subscribe(reciboscontrollers =>{
      this.reciboscontrollers = reciboscontrollers;
    })
      
    }
  }

