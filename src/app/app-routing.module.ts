import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionOneIndexComponent } from './section-one/section-one-index/section-one-index.component';


const routes: Routes = [
  {path: '', component : SectionOneIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
