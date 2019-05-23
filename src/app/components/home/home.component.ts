import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ RopaService ]
})
export class HomeComponent implements OnInit {

    public listado_ropa : Array<string>;
    public guardar_prenda: string;

    constructor( private _ropaService: RopaService ) {    
    }

    ngOnInit() {
        this.listado_ropa = this._ropaService.getRopa();
    }
    guardarPrenda(){
        this._ropaService.addRopa(this.guardar_prenda);
        this.guardar_prenda = null;
    }
    eliminar(index: number){
       this._ropaService.delete(index);
    }

}
