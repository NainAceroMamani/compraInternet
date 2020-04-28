import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { PanelComponent } from './pages/admin/panel/panel.component';
import { InfoComponent } from './pages/admin/info/info.component';
import { CarritoComponent } from './pages/admin/carrito/carrito.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: PanelComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
