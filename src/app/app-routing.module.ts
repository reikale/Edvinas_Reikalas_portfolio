import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sausio13Component } from './components/pages/sausio13/sausio13.component';
import {WorkComponent} from './components/work/work.component';
import { Openhouse2020Component } from './components/pages/openhouse2020/openhouse2020.component';
import { Openhouse2021Component } from './components/pages/openhouse2021/openhouse2021.component';
import { HideyournosesComponent } from './components/pages/hideyournoses/hideyournoses.component';
import { GivveryComponent } from './components/pages/givvery/givvery.component';
import { SamuelisbakasComponent } from './components/pages/samuelisbakas/samuelisbakas.component';


const routes: Routes = [
  {path: 'sausio-13', component: Sausio13Component},
  {path: 'open-house-2020', component: Openhouse2020Component},
  {path: 'open-house-2021', component: Openhouse2021Component},
  {path: 'hide-your-noses', component: HideyournosesComponent},
  {path: 'givvery', component: GivveryComponent},
  {path: 'samuelis-bakas', component: SamuelisbakasComponent},
  {path: '', component: WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
