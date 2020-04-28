import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {

  productos: any = [
    {
      name         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'success'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Frescura anticáncer. Es buena para el corazón. Reduce la presión arterial.Aliada para bajar de peso.',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'danger'
    },
    {
      name         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'danger'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'success'
    },
    {
      name         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'danger'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'success'
    },
    {
      name         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'success'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'danger'
    },
    {
      nname         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'danger'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'success'
    },
    {
      name         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'danger'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'success'
    },
    {
      name         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'success'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'danger'
    },
    {
      nname         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'danger'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'success'
    },
    {
      name         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'danger'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'success'
    },
    {
      name         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'success'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'danger'
    },
    {
      nname         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'danger'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'success'
    },
    {
      name         : 'Banano Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/platano.jpg',
      control      : 'danger'
    },
    {
      name         : 'Sandia Merqueo',
      description  : 'Producto Descripción',
      precio       : '200',
      img          : '/assets/img/productos/sandia.jpg',
      control      : 'success'
    }
  ];

  constructor(
    private route: Router
  ) {}
  categorias = ['Carnes', 'Productos', 'Medicamentos', 'Higiene Bucal', 'Papeles'];

  ngOnInit() {}

  infoPage(producto: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        producto
      }
    };
    this.route.navigate(['/info'], producto);
  }

}
