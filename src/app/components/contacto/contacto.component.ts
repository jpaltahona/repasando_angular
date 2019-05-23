import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
        this._route.params.forEach((params: Params) => {
            this.parametro = params['page'];
            console.log(params);
        });
    }
    redirigir(){
        this._router.navigate(['/contacto', 'jpmaster']);
    }
    redirigirHome(){
        this._router.navigate(['/home'])
    }
}
