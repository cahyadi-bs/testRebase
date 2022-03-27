import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { 
    path: 'test', 
    loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) 
  },
  { 
    path: 'test3', 
    loadChildren: () => import('./pages/test3/test3.module').then(m => m.Test3Module) 
  },
  {
    path: 'test2', 
    loadChildren: () => import('./pages/test2/test2.module').then(m => m.Test2Module) 
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
