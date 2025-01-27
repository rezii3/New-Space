import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceSideComponent } from './space-side/space-side.component';

const routes: Routes = [
  {
    path: '',
    component: SpaceSideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
