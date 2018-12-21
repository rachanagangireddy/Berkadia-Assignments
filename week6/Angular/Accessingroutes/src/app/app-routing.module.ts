import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { DetailsComponent } from './details/details.component';
import { WrongComponent } from './wrong/wrong.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'newhome', component: NewHomeComponent },
  { path: 'detail/:id', component: DetailsComponent},
  { path: '**', component: WrongComponent},//indicates if you enter wrong
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
