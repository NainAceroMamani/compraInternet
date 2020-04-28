import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  producto: any;

  beneficios: any = [
    {
      name         : 'Frescura anticáncer',
      // tslint:disable-next-line: max-line-length
      description  : 'Esta fruta de pulpa roja y una gruesa cáscara verde es rica en licopeno (pigmento vegetal que le da el color rojo).'
    },
    {
      name         : 'Frescura anticáncer',
      // tslint:disable-next-line: max-line-length
      description  : 'Esta fruta de pulpa roja y una gruesa cáscara verde es rica en licopeno (pigmento vegetal que le da el color rojo).'
    },
    {
      name         : 'Frescura anticáncer',
      // tslint:disable-next-line: max-line-length
      description  : 'Esta fruta de pulpa roja y una gruesa cáscara verde es rica en licopeno (pigmento vegetal que le da el color rojo).'
    },
    {
      name         : 'Frescura anticáncer',
      // tslint:disable-next-line: max-line-length
      description  : 'Esta fruta de pulpa roja y una gruesa cáscara verde es rica en licopeno (pigmento vegetal que le da el color rojo).'
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().id) {
        this.producto = this.router.getCurrentNavigation().extras;
      }
    });
   }

   ngOnInit() {
    console.log(this.producto);
  }

}
