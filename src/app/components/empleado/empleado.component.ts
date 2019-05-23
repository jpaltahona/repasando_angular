import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  public titulo = 'Componente Empleado';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public color: string;
  public color_seleccionado: string;


  constructor() {
        this.empleado = new Empleado('david Lopez', 21, 'developer', true);
        this.trabajadores = [
            new Empleado('david Lopez', 21, 'developer', true),
            new Empleado('jean', 23, 'Diseñador Gráfico', true),
            new Empleado('Manuel david', 40, 'Proyect manager', true),
        ];
        this.color = 'blue';
        this.color_seleccionado = '#ccc';
   }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

}