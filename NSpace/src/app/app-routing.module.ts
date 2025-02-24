import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'Menu',
    title: 'Menu',
    loadChildren: () =>
      import('./features/menu/menu.module').then(
        (m) => m.MenuModule
      ),
  },
  {
    path:'Gallery',
    title: 'Gallery',
    loadChildren: () => import('./features/space/space.module').then((m) => m.SpaceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
