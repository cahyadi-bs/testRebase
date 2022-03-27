import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test3Component } from './test3.component';

const routes: Routes = [{ path: '', component: Test3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test3RoutingModule { }
